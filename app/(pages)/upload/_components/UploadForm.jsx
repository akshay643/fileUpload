import Alert from "../../../_components/Alert";
import React from "react";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";
import { ArrowUpFromLine } from "lucide-react";
const UploadForm = ({ uploadHandle, progress }) => {
  const [file, setFile] = React.useState();
  const [error, setError] = React.useState(false);

  const onFileSelect = (event) => {
    setError(false);

    const fileData = event.target.files[0];

    if (fileData && fileData.size > 2000000) {
      setError(true);
      return;
    }
    setFile(fileData);
  };

  return (
    <div className="h-screen flex text-center justify-start gap-12 flex-col  ">
      <h2 className="ml:64 lg:text-4xl xs:text-sm text-white bg-dark">
        Start Uploading and Sharing
      </h2>

      <div className="flex items-center justify-center xs:mx-0 sm:mx-0 ">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => onFileSelect(e)}
            // onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
      </div>

      {error && <Alert msg="File Size below 2 MB only" />}

      {file && !error ? (
        <FilePreview fileData={file} removeFile={() => setFile()} />
      ) : null}

      {progress > 0 ? (
        <ProgressBar progress={progress} />
      ) : (
        <div className="mt-8 flex flex-wrap justify-center ">
          <button
            onClick={(e) => uploadHandle(file)}
            disabled={!file}
            type="submit"
            className={`px-6 py-4 border rounded-xl hover:text-black  ${
              !file ? "bg-gray-500 border-0" : "bg-black border-1"
            } `}
          >
            <span className="text-white flex gap-2">
              <ArrowUpFromLine color="white" /> Upload
            </span>
          </button>
        </div>
      )}

      {progress === 100 && (
        <span className="text-white">File has been uploaded</span>
      )}
      {/* Preview  */}
    </div>
  );
};

export default UploadForm;
