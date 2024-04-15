import { Menu } from "lucide-react";
import React from "react";

const TopHeader = ({ pageTitle, handleClick, openState }) => {
  return (
    <div
      className={` bg-black/90 sticky top-0 ${
        openState ? "ml-72" : "ml-10"
      } text-white py-10 pl-8 flex items-center gap-6`}
    >
      <h1 className="text-4xl">FileMania</h1>
      {!openState && (
        <span>
          <Menu
            onClick={handleClick}
            className="cursor-pointer	"
            color="white"
          />
        </span>
      )}
    </div>
  );
};

export default TopHeader;
