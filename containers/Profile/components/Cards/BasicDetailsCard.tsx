import React, { useState } from "react";
import { MdAlternateEmail, MdDateRange, MdLocalPhone } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { PiGenderIntersex } from "react-icons/pi";
import { IoHeartCircleOutline } from "react-icons/io5";
import { nanoid } from "nanoid";
import BasicInfoDrawer from "../Drawers/BasicInfoDrawer";

const basicDetailsFields = {
  email: {
    label: "Email",
    icon: MdAlternateEmail,
  },
  phone: {
    label: "Phone No.",
    icon: MdLocalPhone,
  },
  gender: {
    label: "Gender",
    icon: PiGenderIntersex,
  },
  dob: {
    label: "Date of Birth",
    icon: MdDateRange,
  },
  anniversary: {
    label: "Marriage Anniversary",
    icon: IoHeartCircleOutline,
  },
  address: {
    label: "Address",
    icon: FaRegAddressCard,
  },
};

const basicDetailsData = {
  email: "radhacharandas@gmail.com",
  phone: "+91 9876543210",
  gender: "Male",
  dob: "01-01-1990",
  anniversary: "01-01-1990",
  address: "123, ABC Colony, XYZ City, India",
};

const BasicDetailsCard = () => {
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsEditDrawerOpen(true);
  };
  return (
    <div className="flex flex-col gap-4 shadow-custom rounded-xl md:p-6 p-4 bg-white">
      <span className="flex justify-between items-center text-xl font-semibold">
        Basic Details:
        <HiOutlinePencil
          className="cursor-pointer"
          onClick={handleDrawerOpen}
        />
      </span>
      <div className="flex flex-col gap-2 text-neutral-800">
        {Object.keys(basicDetailsFields).map((field) => {
          const key = field as keyof typeof basicDetailsFields;
          const Icon = basicDetailsFields[key].icon;
          return (
            <div
              key={nanoid()}
              className="flex items-start md:items-center gap-2"
            >
              <span className="mt-1 md:mt-0">
                <Icon />
              </span>
              <div className="flex flex-col gap-2 md:flex-row">
                <span className="font-semibold">
                  {basicDetailsFields[key].label}:
                </span>
                {basicDetailsData[key]}
              </div>
            </div>
          );
        })}
      </div>
      {isEditDrawerOpen && (
        <BasicInfoDrawer
          open={isEditDrawerOpen}
          onClose={() => setIsEditDrawerOpen(false)}
        />
      )}
    </div>
  );
};

export default BasicDetailsCard;
