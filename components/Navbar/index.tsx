import Image from "next/image";
import React from "react";
import emptyUserFallbackImage from "../../public/static/Illustrations/empty-user.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white border-b border-b-neutral-300 z-50">
      <img src="/iskcon-gurgaon-logo.png" alt="logo" className="size-16" />
      <div className="flex gap-2 items-center cursor-pointer pr-2 pl-0.5 py-0.5 hover:bg-neutral-100 hover:rounded-full">
        <Image
          src={emptyUserFallbackImage}
          alt="user"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span>User Name</span>
      </div>
    </div>
  );
};

export default Navbar;
