import React from "react";
import LateralMenu from "../components/lateralmenu";
export default function layoutpanel({ children }) {
  return (
    <div className=" h-screen w-full ">
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-3 max-xl:col-span-0 w-full max-xl:h-0">
          <LateralMenu />
        </div>
        <div className="col-span-9 max-xl:col-span-12 ">{children}</div>
      </div>
    </div>
  );
}
