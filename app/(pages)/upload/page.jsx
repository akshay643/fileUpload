"use client";
import React, { useEffect } from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "../../../firebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";

import GenerateRandomString from "../../_utils/GenerateRandomString";
import { useRouter } from "next/navigation";

const Upload = () => {
  const [progress, setProgress] = React.useState();
  const storage = getStorage(app);
  const [docId, setDocId] = React.useState();
  const [uploadCompleted, setUploadCompleted] = React.useState(false);
  const router = useRouter();
  const db = getFirestore(app);
  const user = useUser();
  useEffect(() => {
    // setTimeout(() => {
    if (uploadCompleted && docId) {
      // Check if docId is not undefined
      router.push(`/file-preview/` + docId);
    }
    // }, 5000);
  }, [uploadCompleted, docId]); // Add docId to the dependencies array

  const uploadFile = (file) => {
    console.log("main", file.name);
    const metadata = {
      contentType: file.type,
    };

    const storageRef = ref(storage, "file-upload/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        if (progress === 100) {
          setUploadCompleted(true);
        }
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveInfo(file, downloadURL);
        });
      }
    );
  };

  const saveInfo = async (file, fileUrl) => {
    const dataId = GenerateRandomString();
    await setDoc(doc(db, "userData", dataId), {
      filename: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileurl: fileUrl,
      userEmail: user.user.primaryEmailAddress.emailAddress,
      userName: user.user.fullName,
      password: "",
      id: dataId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + "f/" + dataId,
    });
    setDocId(dataId);
  };

  return (
    <>
      <div className="p-20">
        <UploadForm
          uploadHandle={(file) => uploadFile(file)}
          progress={progress}
        />
      </div>
    </>
  );
};

export default Upload;
