"use client";

import React from "react";
import dynamic from "next/dynamic";
import FullPageLoader from "../../../components/Loader/FullPageLoader";

const ProfilePageDynamic = dynamic(
  () => import("../../../containers/Profile"),
  {
    loading: () => <FullPageLoader />,
    ssr: false,
  }
);

const page = () => {
  return <ProfilePageDynamic />;
};

export default page;
