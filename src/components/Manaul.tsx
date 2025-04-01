import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Manual = ({
  isOpenHelp,
  setIsOpenHelp,
}: {
  isOpenHelp: boolean;
  setIsOpenHelp: (isOpen: boolean) => void;
}) => {
  // const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    localStorage.setItem("isFirstTime", "false");
    setIsOpenHelp(false);
  };

  // Detect click outside the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpenHelp(false);
      }
    };

    if (isOpenHelp) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenHelp]);

  return (
    <>
      {isOpenHelp && (
        <div className="fixed inset-0 flex justify-center items-center z-[100]">
          <div className="fixed inset-0 bg-black opacity-50" />
          {/* Content */}
          <div
            ref={modalRef}
            className="bg-white opacity-95 border-5 border-gray-200  rounded-lg shadow-lg p-6 z-[200] w-96 max-w-[80vw] min-w-[300px] flex flex-col justify-center items-center text-center"
          >
            <h2 className="text-xl font-bold mb-4">แนะนำการใช้งาน</h2>
            <hr className="border-1 border-gray-300 w-full mb-4" />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <div className="relative h-10 w-10 ">
                  <Image
                    src="/location-1.gif"
                    alt="manual"
                    fill
                    className="rounded-lg mb-4"
                  />
                </div>
                <span>กดที่นี้เพื่อไปยังมุมมองอื่น</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative h-10 w-10">
                  <Image
                    src="/rotate.gif"
                    alt="rotate"
                    fill
                    className="rounded-lg mb-4"
                  />
                </div>
                <span>ลากนิ้วเพื่อหมุนมุมมอง</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative h-10 w-10">
                  <Image
                    src="/zoom.gif"
                    alt="zoom"
                    fill
                    className="rounded-lg mb-4"
                  />
                </div>
                <span>ใช้ 2 นิ้วเพื่อย่อ - ขยาย</span>
              </div>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
              onClick={() => handleClose()}
            >
              เข้าใจแล้ว
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Manual;
