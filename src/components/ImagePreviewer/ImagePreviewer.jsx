"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImagePreviewer = (props) => {
  const [selectedImg, setSelectedImg] = useState("");
  const [popupToggle, setPopupToggle] = useState(false);
  const [removeAnimation, setRemoveAnimation] = useState(false);
  useEffect(() => {
    if (!popupToggle) {
      setTimeout(() => {
        setRemoveAnimation(false);
      }, 600);
    }
  }, [popupToggle]);

  return (
    <>
      <div className="relative">
        <div className="flex gap-2 w-full h-full px-2 flex-wrap">
          {props?.images?.map((img, index) => {
            return (
              <div
                onClick={() => {
                  setSelectedImg(img);
                  setRemoveAnimation(true);
                  setPopupToggle(true);
                }}
                className="hover:scale-105 cursor-pointer border-[1px] border-black transition-all h-[20rem]  w-[13rem] bg-gray-400"
                key={index}
              >
                <div className="relative h-full w-full object-cover">
                  <Image
                    className="object-cover bg-gray-400"
                    src={img}
                    sizes="100%"
                    fill
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={removeAnimation ? { zIndex: "2" } : { zIndex: "-1" }}
          className="h-full left-0 fixed top-0 w-full flex justify-center items-center"
        >
          <div
            onClick={() => {
              setPopupToggle(false);
            }}
            style={
              popupToggle
                ? { backgroundColor: "#0000005c", opacity: "1" }
                : { backgroundColor: "white", opacity: "0" }
            }
            className="h-full fixed transition-opacity duration-700 top-0 w-full flex items-center justify-center"
          ></div>
          <div
            style={
              popupToggle
                ? { scale: "1", opacity: "1" }
                : { scale: "2", opacity: "0" }
            }
            className="md:h-[35rem] transition-all  duration-300 absolute h-[70%] w-[90%] bg-white "
          >
            {selectedImg && (
              <div className="relative h-full w-full object-cover">
                <Image
                  src={selectedImg}
                  sizes="100%"
                  className="object-contain"
                  alt=""
                  fill
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagePreviewer;
