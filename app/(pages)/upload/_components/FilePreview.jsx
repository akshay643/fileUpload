import React from "react";
import { File } from "lucide-react";
import { Trash } from "lucide-react";

const FilePreview = ({ fileData, removeFile }) => {
  return (
    <div className="mx-0 lg:mx-20 flex items-center justify-center gap-2 text-white border-dashed border-slate-500">
      <File />
      <p className="mr-5">
        {fileData.name} ( {(fileData.size / (1024 * 1024)).toFixed(2)}mb)
      </p>
      <Trash onClick={removeFile} />
    </div>
  );
};

export default FilePreview;
