"use client";
import React from "react";

const Navbar = ({
  roomState,
  setRoomState,
  roomObject,
  setIsOpenHelp,
}: // setIsOpenHelp,
{
  roomState: string;
  setRoomState: (roomState: string) => void;
  roomObject: { label: string; id: string }[];
  seetIsOpenHelp: (isOpen: boolean) => void;
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
      <div className="flex gap-4">
        <div
          className="relative h-[25px] w-[25px]"
          onClick={() => {
            console.log("set open help");
            setIsOpenHelp(true);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#ffffff"
                strokeWidth="2"
              ></path>{" "}
              <path
                d="M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M12 16H12.01"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="relative h-[25px] w-[25px]" onClick={() => {}}>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
    </div>
  );
};

export default Navbar;
