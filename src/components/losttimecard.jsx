"use client";
import React, { useEffect, useState } from "react";

export default function Losttimecard() {
  const [datatest, setDatatest] = React.useState({
    text1: "Deftones were with us",
    text2: "> [ 55°36’??.2”N - 37°39’??.6”W ]<",
    text3:
      "> We had nowhere to go, so we just stayed looking up the stars, i miss everything what we pass thorught.",
    text4: "> We were ready to be scarred",
    audio: false,
  });

  return (
    <div className="">
      <div className="  grid grid-cols-12">
        <div className=" col-span-4">
          <img
            src="/bg.png"
            alt="no hubo"
            className="object-cover w-full h-full  [clip-path:polygon(0_0,100%_0,100%_100%,30px_100%,0_calc(100%_-_30px))]"
          />
        </div>
        <div className=" col-span-5 p-7  bg-[#CBCBCB]">
          {datatest && (
            <div className="p-4 flex flex-col justify-between h-full ">
              <p className="text-3xl font-bold">{datatest.text1}</p>
              <div className="grid gap-3">
                <p>{datatest.text4}</p>
                <p className="leading-4">{datatest.text3}</p>
                <p>{datatest.text2}</p>
              </div>
              <div>
                <div className="flex">
                  {" "}
                  <div className="rounded-full p-7 bg-black"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" col-span-2">
          <div className=" w-full h-full grid grid-rows-12 bg-gradient-to-b from-[#10120F] to-[#5D6C64]">
            <div className=" row-span-9 grid grid-cols-4 grid-rows-4">
              <div className="grid-cols-1 row-span-1 bg-gradient-to-b from-[#5D6C64] to-[#10120F]"></div>
              <div className="grid-cols-1 row-span-2 bg-gradient-to-b from-[#10120F] to-[#5D6C64]"></div>
              <div className="grid-cols-1 row-span-3 bg-gradient-to-b from-[#5D6C64] to-[#10120F]"></div>
              <div className="grid-cols-1 row-span-4 bg-gradient-to-b from-[#5D6C64] to-[#10120F]"></div>
            </div>
            <div className="w-full h-full grid items-center  row-span-3 p-4 text-white">
              <span className="text-sm leading-[0.3]">Lost code</span>
              <span className="text-3xl leading-[0.3]">LT-58FD1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
