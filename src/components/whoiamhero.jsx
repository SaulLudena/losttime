import React from "react";
import Imagetrialusage from "./imagetrialusage";
export default function Whoiamhero() {
  return (
    <div className=" h-full flex relative">
      <div className=" grid items-center w-1/2 relative z-10 p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Who I Am</h1>
          <p className="text-lg">
            So lets say i have short memory loss and i forget who i am every
            day.
          </p>
          <p className="text-lg">
            Feel free to remind me and <strong>remind yourself</strong> as well.
          </p>
          <p className="text-lg">
            Every day a new slot in my memory is available to storage your
            memory
          </p>
        </div>
      </div>
      <Imagetrialusage />
    </div>
  );
}
