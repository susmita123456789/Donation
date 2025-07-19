import React, { useState } from "react";
import { Tag } from "antd";
import { MdDateRange, MdOutlineFeaturedPlayList } from "react-icons/md";
import { CgNametag } from "react-icons/cg";
import { GiPrayerBeads } from "react-icons/gi";
import { FaBookReader, FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { getRandomColor } from "@/lib/utils";
import DevotionalDetailsDrawer from "../Drawers/DevotionalDetailsDrawer";

type DevotionalDataKeys =
  | "spiritualName"
  | "characteristics"
  | "chantingRounds"
  | "currentBookReading"
  | "spiritualMentor"
  | "connectedSince";

type DevotionalDataValues = string | number | string[];

const devotionalData: Record<DevotionalDataKeys, DevotionalDataValues> = {
  spiritualName: "Radha Govinda Das",
  characteristics: [
    "Frontliner",
    "Devotee",
    "Spiritual",
    "Chanting",
    "Reading",
  ],
  chantingRounds: 16,
  currentBookReading: "Srimad Bhagavatam",
  spiritualMentor: "HG ABC Das",
  connectedSince: 2013,
};

const mapIcons: Record<DevotionalDataKeys, React.ComponentType> = {
  spiritualName: CgNametag,
  characteristics: MdOutlineFeaturedPlayList,
  chantingRounds: GiPrayerBeads,
  currentBookReading: FaBookReader,
  spiritualMentor: FaChalkboardTeacher,
  connectedSince: MdDateRange,
};

const mapTitles: Record<DevotionalDataKeys, string> = {
  spiritualName: "Spiritual Name",
  characteristics: "Characteristics",
  chantingRounds: "Chanting Rounds",
  currentBookReading: "Current Book Reading",
  spiritualMentor: "Spiritual Mentor",
  connectedSince: "Connected Since",
};

const DevotionalDetailsCard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };
  return (
    <div className="flex flex-col gap-4 shadow-custom rounded-xl md:p-6 p-4 bg-white">
      <span className="flex justify-between items-center text-xl font-semibold">
        Devotional Details:
        <HiOutlinePencil
          onClick={handleOpenDrawer}
          className="cursor-pointer"
        />
      </span>
      <div className="flex flex-col gap-2 text-neutral-800">
        {Object.keys(devotionalData).map((key) => {
          const typedKey = key as DevotionalDataKeys;
          const Icon = mapIcons[typedKey];
          const value = devotionalData[typedKey];

          return (
            <div
              key={typedKey}
              className="flex items-start md:items-center gap-2"
            >
              <span className="mt-1 md:mt-0">
                <Icon />
              </span>
              <div className="flex flex-col gap-2 md:flex-row">
                <span className="font-semibold">{mapTitles[typedKey]}:</span>
                <span>
                  {Array.isArray(value)
                    ? // Check if value is an array and then map over it
                      (value as string[]).map((characteristic) => (
                        <Tag color={getRandomColor()} key={characteristic}>
                          {characteristic}
                        </Tag>
                      ))
                    : value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <DevotionalDetailsDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default DevotionalDetailsCard;
