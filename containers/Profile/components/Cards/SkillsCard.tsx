import { Tag } from "antd";
import React, { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import SkillsDrawer from "../Drawers/SkillsDrawer";
import { getRandomColor } from "@/lib/utils";

const skills = ["Mridanga", "Harmonium", "Public Speaking", "Web Development"];

const SkillsCard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className="flex flex-col gap-4 shadow-custom rounded-xl md:p-6 p-4 bg-white">
      <span className="flex justify-between items-center text-xl font-semibold">
        Skills:
        <HiOutlinePencil
          onClick={handleOpenDrawer}
          className="cursor-pointer"
        />
      </span>
      <div className="flex gap-2 flex-wrap text-neutral-800">
        {skills.map((skill) => (
          <Tag color={getRandomColor()} key={skill}>
            {skill}
          </Tag>
        ))}
      </div>
      <SkillsDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default SkillsCard;
