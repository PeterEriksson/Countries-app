import React from "react";
import { MoonIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    /* margin on the sides: 10 on each side. */
    <div className="w-screen h-20 border-b-4 border-borderColor  z-50 fixed top-0 bg-mainDarkGrayish flex flex-row justify-between items-center">
      <h3
        onClick={() => router.push("/")}
        className="text-white font-extrabold cursor-pointer text-lg ml-5"
      >
        Where in the world?
      </h3>

      <div className="flex flex-row mr-5 items-center cursor-pointer">
        <MoonIcon className="h-5 w-5 text-white" />
        <h4 className="font-semibold text-white ml-2 text-sm">Dark Mode</h4>
      </div>
    </div>
  );
}

export default Nav;
