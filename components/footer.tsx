import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">&copy; 2024 Rahul.</small>
      <p className="text-xs items-center justify-center flex">
        <span className="font-semibold">About This Website:</span> Built With{" "}
        <span className="ml-1 ">
          <FaHeart className="fill-red-500 w-5 h-5 animate-ping " />
        </span>
      </p>
    </footer>
  );
}
