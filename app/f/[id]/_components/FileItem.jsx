import React, { useState } from "react";
import { FileCheck2, Zap, Ruler, Download } from "lucide-react";
const FileItem = ({ data }) => {
  const [password, setPassword] = useState();
  console.log("disabled", password === data?.password);
  return (
    <div
      style={{ border: "1px solid #444" }}
      className="text-white p-6 w-11/12 text-center rounded-xl"
    >
      <h1>
        <span className="text-2xl text-orange-400">{data?.userName}</span>{" "}
        shared the file with you
      </h1>
      <p className="text-sm mt-6">File Details Below</p>
      <FileCheck2
        className="text-white animate-bounce mx-auto mt-8 "
        size={100}
      />
      <div className="flex text-center gap-2 justify-center text-sm flex-col mx-auto">
        <div className="flex justify-center gap-2">
          <p>File Name</p>

          <Zap />

          <span className=" text-orange-400">{data?.filename}</span>
        </div>
        <div className="flex justify-center gap-2">
          <p>File Size</p>

          <Ruler />
          <span className=" text-orange-400">
            {(data?.fileSize / (1024 * 1024)).toFixed(2)}mb
          </span>
        </div>
      </div>

      {/* Password Logic */}
      {data?.password && (
        <input
          placeholder="Enter Password"
          value={password}
          className="rounded p-2 mt-6 text-black"
          onChange={(e) => setPassword(e.target.value)}
        />
      )}

      <div className="flex item-center justify-center mt-8">
        <button
          onClick={() => window.open(data?.fileurl)}
          disabled={password !== data?.password}
          className={`px-6 py-4 flex gap-4 rounded ${
            password === data?.password
              ? "bg-green-400 text-white"
              : "bg-gray-500 text-gray-100"
          }`}
          style={{ border: "1px solid #444" }}
        >
          <Download />
          Download
        </button>
      </div>
    </div>
  );
};

export default FileItem;
