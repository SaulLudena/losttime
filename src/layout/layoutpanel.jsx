import React from "react";
import LateralMenu from "../components/lateralmenu";
export default function layoutpanel({ children }) {
  return (
    <div className=" h-screen w-full ">
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-3 w-full">
          <LateralMenu />
        </div>
        <div className="col-span-9 ">{children}</div>
      </div>
    </div>
  );
}
