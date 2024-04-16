"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { app } from "../../../../firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { ArrowBigLeft } from "lucide-react";
import { Copy } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";
import Sendemail from "../../../_utils/GlobalApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FilePreview = ({ params }) => {
  const db = getFirestore(app);
  const [fileData, setFileData] = useState();
  const [passwordEnable, setPasswordEnable] = useState(false);
  const [emailToSend, setEmailToSend] = useState("");
  const [filePassword, setFilePassword] = useState(fileData?.password);
  const [copied, setCopied] = useState({ value: "", copied: false });
  useEffect(() => {
    getFileInfo();
  }, []);

  const getFileInfo = async () => {
    const docRef = doc(db, "userData", params.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setFileData(docSnap.data());
      setFilePassword("docsnap", docSnap.data().password);
      // console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      // console.log("No such document!");
    }
  };

  const handlePasswordSave = async () => {
    const userDataRef = doc(db, "userData", params.fileId);
    // Set the "capital" field of the city 'DC'
    await updateDoc(userDataRef, {
      password: filePassword,
    });
    toast("Password Saved Successfully!");
  };

  const sendEmail = async () => {
    if (!emailToSend) {
      alert("Please Enter a valid email");
    } else {
      const result = await Sendemail({ ...fileData, sendEmailTo: emailToSend });
      if (result.status === 200) {
        alert("Shared Successfullly");
        setEmailToSend("");
      }
    }
  };
  return (
    <div className="lg:p-20 sm:mt-40 lg:mt-20 sm:p-10 h-screen overflow-hidden">
      <div className="flex gap-4">
        <Link
          href="/upload"
          className="flex gap-4 border-solid border-slate-500 text-white"
        >
          <ArrowBigLeft color="white" className="mb-4" />{" "}
          <span>Back To Uploads</span>
        </Link>
      </div>

      <div
        className="flex lg:flex-row sm:flex-col justify-between items-start p-6 rounded-lg gap-2"
        style={{ border: "1px solid #444" }}
      >
        <div className="w-full flex flex-col gap-3">
          <h3 className="text-lg font-bold text-white sm:text-xl">Short Url</h3>
          <div className="flex lg:flex-row sm:flex-col items-center gap-2">
            <input
              type="text"
              value={fileData?.shortUrl}
              style={{ border: "1px solid #444" }}
              className="text-white bg-black border-solid border-white rounded-xl p-3 w-9/12"
            />
            <span>
              <CopyToClipboard
                text={fileData?.shortUrl}
                onCopy={() => setCopied({ copied: true })}
              >
                <Copy
                  color="white"
                  onClick={() => toast("URL Copied Successfully!")}
                />
              </CopyToClipboard>
            </span>
          </div>
          <div className="flex items-start flex-col my-6">
            <span className="flex items-center">
              <label className="text-white">Enable Password?</label>
              <input
                onChange={() => setPasswordEnable(!passwordEnable)}
                type="checkbox"
                checked={passwordEnable || fileData?.password}
                className="w-12 h-6 rounded-xl"
              />
            </span>
            <br />
            {passwordEnable || fileData?.password ? (
              <div className="flex">
                <input
                  type="text"
                  onChange={(e) => setFilePassword(e.target.value)}
                  placeholder="Enter Password"
                  style={{ border: "1px solid #444" }}
                  className="text-white bg-black border-solid border-white rounded-xl p-3 w-9/12"
                />
                <button
                  onClick={handlePasswordSave}
                  style={{ border: "1px solid #444" }}
                  className="py-2 px-4 border-1 text-white rounded-xl ms-2 hover:text-black hover:bg-white"
                >
                  Save
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="flex flex-col p-6 rounded-lg"
            style={{ border: "1px solid #444" }}
          >
            <label className="text-white my-4">Send File To Email</label>
            <input
              type="text"
              value={emailToSend}
              onChange={(e) => setEmailToSend(e.target.value)}
              placeholder="Enter Email"
              style={{ border: "1px solid #444" }}
              className="text-white bg-black border-solid border-white rounded-xl p-3 w-9/12"
            />
            <button
              onClick={sendEmail}
              className="text-white py-4 px-6 border-2 w-fit rounded-xl mt-4  hover:bg-white hover:text-black transition duration-500 ease-in-out"
            >
              Send Email
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              alt=""
              src={fileData?.fileurl}
              className="size-full rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition="Bounce"
        // transition: Bounce,
      />
    </div>
  );
};

export default FilePreview;
