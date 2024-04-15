"use client";
import React from "react";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { app } from "../../../firebaseConfig";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
const page = () => {
  const [fileData, setFileData] = React.useState([]);
  const user = useUser();
  const router = useRouter();
  const userEmail = user?.user?.primaryEmailAddress?.emailAddress; // Access user email safely
  const db = getFirestore(app);
  React.useEffect(() => {
    if (userEmail) {
      // Proceed only if user email is available
      setTimeout(() => {
        getFileInfo();
      }, 3000);
    }
  }, [userEmail]); // Include userEmail in dependency array

  const getFileInfo = async () => {
    const q = query(
      collection(db, "userData"),
      where("userEmail", "==", userEmail)
    );
    const querySnapshot = await getDocs(q);

    const newData = [];
    querySnapshot.forEach((doc) => {
      // Push document data into the newData array
      newData.push(doc.data());
    });

    setFileData(newData); // Update state with the new array of data
  };

  console.log("filedata", fileData);

  return (
    <div className="h-screen p-20">
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr className="bg-black text-white">
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                File Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                File Size
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                Password?
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {fileData?.map((item, index) => {
              return (
                <>
                  <tr className="bg-black">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                      {item.filename}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                      {item.fileSize}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                      {item.password ? "Yes" : "No"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                      <button
                        className="px-4 py-6"
                        style={{ border: "1px solid #444" }}
                        onClick={() => router.push(`/file-preview/` + item.id)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
