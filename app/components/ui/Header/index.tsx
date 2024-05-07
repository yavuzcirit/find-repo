import React from "react";
import { HeaderProps } from "./types";
import Link from "next/link";

const Header: React.FC<HeaderProps> = ({ auth, onSignOut, onSignIn }) => {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white py-4 px-8">
      <div className="text-2xl font-bold"> Repo Finder</div>
      <button
        onClick={auth ? onSignOut : onSignIn}
        className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
      >
        <Link href={'https://support.github.com/request/landing'}> Help</Link>
      </button>
    </header>
  );
};

export default Header;
