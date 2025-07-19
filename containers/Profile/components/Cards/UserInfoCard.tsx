import { Tag } from "antd";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineUpload } from "react-icons/hi";
import emptyUserFallbackImage from "../../../../public/static/Illustrations/empty-user.svg";
import Image from "next/image";

const imageLink = null;

const UserInfoCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 shadow-custom rounded-xl md:p-6 p-4 bg-white">
      {imageLink ? (
        <div className="relative group cursor-pointer">
          <img
            src={imageLink}
            alt="profile"
            className="size-32 min-w-32 rounded-lg"
          />
          <div
            className="absolute rounded-md inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => {}}
          >
            <HiOutlineUpload className="text-white size-8" />
          </div>
        </div>
      ) : (
        <div className="relative group cursor-pointer">
          <div className="flex bg-neutral-100 items-center justify-center size-32 rounded-md">
            <Image
              src={emptyUserFallbackImage}
              alt="user"
              width={80}
              height={80}
            />
          </div>
          <div
            className="absolute rounded-md inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => {}}
          >
            <HiOutlineUpload className="text-white size-8" />
          </div>
        </div>
      )}

      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="flex justify-between items-center text-xl font-semibold">
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <h1 className="text-2xl font-semibold">User Name</h1>
            <Tag color="blue">Frontliner</Tag>
          </div>
        </div>
        <p className="text-neutral-500 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          deleniti maiores repellat ipsum blanditiis omnis delectus adipisci
          error. Perferendis non at exercitationem quos molestias! Incidunt
          repellat quam laudantium. Aperiam, eligendi!
        </p>
        <div className="flex gap-2 items-center">
          <FaLinkedin className="size-6 cursor-pointer" />
          <FaFacebook className="size-6 cursor-pointer" />
          <FaInstagram className="size-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
