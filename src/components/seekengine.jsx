import React from "react";
import Link from "next/link";
import LostTimeCard from "./losttimecard";
export default function Seekengine() {
  const [datatest, setDatatest] = React.useState({
    text1: "Deftones were with us",
    text2: "> [ 55°36’??.2”N - 37°39’??.6”W ]<",
    text3:
      "> We had nowhere to go, so we just stayed looking up the stars, i miss everything what we pass thorught.",
    text4: "> We were ready to be scarred",
    audio: false,
  });
  return (
    <div className="w-full h-full grid items-center">
      <div className="grid  items-center max-w-[1600px] mx-auto w-[90%]  gap-5">
        <div className="grid gap-7 p-4 md:p-0">
          <div className="grid gap-2">
            <span className="flex items-center gap-2 text-5xl">
              <div className="w-3 h-3 bg-black"></div> Time to look up
            </span>
            <span className="flex items-center gap-2">
              paste you lostcode in the field.
            </span>
            <div className="flex ">
              <input
                type="text"
                className="outline-none border py-5 px-4 border-r-0 flex-grow max-w-sm"
                placeholder="LT-2454"
              />
              <div className="flex">
                <Link
                  href="/go"
                  className="bg-black text-white py-5 px-4 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,0_100%)]"
                >
                  Find out
                </Link>
              </div>
            </div>
          </div>
        </div>

        <LostTimeCard />
      </div>
    </div>
  );
}
