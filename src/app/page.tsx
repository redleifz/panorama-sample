"use client";
import Manaul from "@/components/Manaul";
import Navbar from "@/components/Navbar";
import PanoramaSectiion from "@/components/panorama/PanoramaSectiion";
import React, { useEffect, useState } from "react";

const Page = () => {
  const markerHtml = `
  <div class="relative flex justify-center items-center">
    <!-- Outer Circle (Border) -->
    <div class="w-16 h-16 border-2 border-white  rounded-full flex justify-center items-center">
      <!-- Inner Circle (Background) -->
<div class="relative flex justify-center items-center">
  <!-- Outer Border -->
  <div class="absolute w-12 h-12 rounded-full border-white border-4"></div>
  <!-- Inner Background with Opacity -->
  <div class="w-12 h-12 rounded-full bg-gray-200 opacity-50 flex justify-center items-center">
    <img src="/location-1.gif" alt="gif" class="w-10 h-10 rounded-full" />
  </div>
</div>
    </div>
  </div>
`;

  const size = { width: 120, height: 120 };

  const roomObject = [
    {
      label: "ห้องนอน",
      id: "bedroom",
      markers: [
        {
          id: "balcony",
          html: markerHtml,
          position: { yaw: 1.21, pitch: -0.01 },
          size: size,
        },
        {
          id: "bathroom",
          html: markerHtml,
          position: { yaw: 3.59, pitch: -0.09 },
          size: size,
        },
      ],
    },
    {
      label: "ระเบียง",
      id: "balcony",
      markers: [
        {
          id: "bedroom",
          html: markerHtml,
          position: { yaw: 3.14, pitch: -0.16 },
          size: size,
        },
      ],
    },
    {
      label: "ห้องน้ำ",
      id: "bathroom",
      markers: [
        {
          id: "bedroom",
          html: markerHtml,
          position: { yaw: 4.49, pitch: -0.05 },
          size: size,
        },
      ],
    },
  ];

  const [roomState, setRoomState] = useState<string>("bedroom");
  const [isOpenHelp, setIsOpenHelp] = useState<boolean>(false);

  useEffect(() => {
    const isFirstTime = localStorage.getItem("isFirstTime");
    if (isFirstTime === null) {
      setIsOpenHelp(true);
    }
  }, []);

  return (
    <div>
      <Manaul isOpenHelp={isOpenHelp} setIsOpenHelp={setIsOpenHelp} />
      <PanoramaSectiion
        roomState={roomState}
        setRoomState={setRoomState}
        roomObject={roomObject}
      />
      <Navbar
        roomState={roomState}
        setRoomState={setRoomState}
        roomObject={roomObject}
        setIsOpenHelp={setIsOpenHelp}

        // setIsOpenHelp={setIsOpenHelp}
      />
    </div>
  );
};

export default Page;
