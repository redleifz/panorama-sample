"use client";
import Navbar from "@/components/Navbar";
import PanoramaSectiion from "@/components/panorama/PanoramaSectiion";
import React, { useState } from "react";

const Page = () => {


  const markerHtml = "<div class='marker'><img src='/location.gif' alt='gif' /></div>";
  const size = { width: 80, height: 80 };

  const roomObject = [
    {
      label: "ห้องนอน",
      id: "bedroom",
      markers : [
        {
          id: "balcony",
          html: markerHtml,
          position: { yaw: 1.21, pitch: -0.01 },
          size: size
        },
        {
          id: "bathroom",
          html: markerHtml,
          position: { yaw: 3.59, pitch: -0.09 },
          size: size
        },
      ]
    },
    {
      label: "ระเบียง",
      id: "balcony",
      markers : [
        {
          id: "bedroom",
          html: markerHtml,
          position: { yaw: 3.14, pitch: -0.16 },
          size: size
        },
      ]
    },
    {
      label: "ห้องน้ำ",
      id: "bathroom",
      markers : [
        {
          id: "bedroom",
          html: markerHtml,
          position: { yaw: 4.49, pitch: -0.05 },
          size: size
        },
      ]
    },
  ];

  const [roomState, setRoomState] = useState<string>("bedroom");

  return (
    <div>
      <PanoramaSectiion roomState={roomState} setRoomState={setRoomState} roomObject={roomObject} />
      <Navbar
        roomState={roomState}
        setRoomState={setRoomState}
        roomObject={roomObject}
      />
    </div>
  );
};

export default Page;
