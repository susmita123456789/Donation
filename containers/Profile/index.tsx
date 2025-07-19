"use client";

import React from "react";
import UserInfoCard from "./components/Cards/UserInfoCard";
import DevotionalDetailsCard from "./components/Cards/DevotionalDetailsCard";
import BasicDetailsCard from "./components/Cards/BasicDetailsCard";
import SkillsCard from "./components/Cards/SkillsCard";

const Profile = () => {
  return (
    <div className="px-4 md:px-14 py-6 md:py-8 flex flex-col gap-6 bg-[#fafdff]">
      <UserInfoCard />
      <DevotionalDetailsCard />
      <BasicDetailsCard />
      <SkillsCard />
    </div>
  );
};

export default Profile;
