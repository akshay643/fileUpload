"use client";
import React, { useEffect, useState } from "react";
import { app } from "../../../firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import FileItem from "./_components/FileItem";
const page = ({ params }) => {
  const [fileData, setFileData] = useState();
  const db = getFirestore(app);
  useEffect(() => {
    getFileInfo();
  }, []);

  const getFileInfo = async () => {
    const docRef = doc(db, "userData", params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setFileData(docSnap.data());
      //   console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      //   console.log("No such document!");
    }
  };
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-6  bg-black">
      <Image src="/logo.svg" width={50} height={50} />
      <FileItem data={fileData} />;
    </div>
  );
};

export default page;
