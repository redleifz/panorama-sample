"use client";
import React from "react";

const Navbar = ({
  roomState,
  setRoomState,
  roomObject,
}: {
  roomState: string;
  setRoomState: (roomState: string) => void;
  roomObject: { label: string; id: string }[];
}) => {
  return (
    <div className="fixed bottom-0 bg-black opacity-80 py-4  text-white w-full flex gap-4 items-end justify-between z-50 px-6">
      {/* Navbar buttons */}
      <div className="flex gap-4">
        {roomObject.map((room, index) => (
          <div key={index}>
            <button
              className={`rounded relative ${
                roomState === room.id ? "text-white" : "text-gray-500"
              }`}
              onClick={() => setRoomState(room.id)}
            >
              {room.label}
              {/* Active underline */}
              {roomState === room.id && (
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all duration-300" />
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="relative h-[25px] w-[25px]" onClick={()=>{

      }}>
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z"
              fill="#ffffff"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
