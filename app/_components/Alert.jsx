import { AlertCircle } from "lucide-react";
import React from "react";

const Alert = ({ msg }) => {
  return (
    <div className="flex gap-5 p-4 items-center bg-red-700 mx-20 w-25 rounded-xl text-white">
      <AlertCircle /> {msg}
    </div>
  );
};

export default Alert;
