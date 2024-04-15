import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className=" bg-slate-500 rounded-lg h-2 mx-20 text-white">
      <div
        className="bg-white p-1 rounded"
        style={{ width: `${progress}%` }}
      ></div>
      <span className="text-white">{`${Number(progress).toFixed()}%`}</span>
    </div>
  );
};

export default ProgressBar;
