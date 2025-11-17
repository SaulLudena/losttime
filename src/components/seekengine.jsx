import React from "react";
import Link from "next/link";
export default function Seekengine() {
  return (
    <div className=" grid h-full   items-center max-w-[1600px] m-auto w-[80%] ">
      <div className="grid gap-7">
        <div className="grid gap-2">
          <span className="flex items-center gap-2 text-5xl">
            <div className="w-3 h-3 bg-black"></div> Time to look up
          </span>
          <span className="flex items-center gap-2">
            paste you lostcode in the field.
          </span>
        </div>
      </div>
    </div>
  );
}
