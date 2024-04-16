"use client";
import React from "react";
import Image from "next/image";
import { Cross, File, X, Shield, Upload } from "lucide-react";
import { useClerk } from "@clerk/clerk-react";
import { LogOut } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidenav = ({ handleClick, openState }) => {
  const [active, setActive] = React.useState(0);
  const { signOut } = useClerk();
  const router = useRouter();

  const menuList = [
    {
      id: 1,
      name: "Upload",
      path: "/upload",
      icon: Upload,
    },

    {
      id: 1,
      name: "Files",
      path: "/files",
      icon: File,
    },
    {
      id: 1,
      name: "Upgrade",
      path: "/upload",
      icon: Shield,
    },
  ];
  return (
    <div
      className={` flex h-full flex-col z-50 justify-between shadow-2xl inset-0 transition-transform duration-300 ease-in-out shadow-gray-500 bg-black ${
        openState ? "w-72" : "hidden"
      }`}
      style={{ zIndex: openState ? 100 : -1 }} // Adjust the z-index values here
    >
      <div className="px-4 py-6">
        <div className="flex items-center justify-between">
          <Image src="/logo.svg" width={50} height={50} alt="logo" />
          <span>
            <X onClick={handleClick} color="white" />
          </span>
        </div>

        <div className="mt-6 space-y-1">
          {menuList?.map((item, index) => (
            <Link
              href={item.path}
              // className="text-white"
              className={`
              // px-2 rounded-xl w-full flex justify-start bg-black text-white items-center
               ${active === index && "bg-gray-700"} `}
            >
              <button
                key={index}
                className="flex gap-4 px-2 py-4"
                onClick={() => setActive(index)}
              >
                <item.icon color="white" />

                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0  justify-center border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-black p-4 hover:bg-black/50 text-white"
        >
          <button onClick={() => signOut(() => router.push("/sign-in"))}>
            <LogOut />
          </button>

          <div></div>
        </a>
      </div>
    </div>
  );
};

export default Sidenav;
