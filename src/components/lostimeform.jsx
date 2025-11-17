import React from "react";
import Link from "next/link";
export default function rightpanel() {
  return (
    <div className=" grid h-full   items-center max-w-[1600px] m-auto w-[80%] ">
      <div className="grid gap-7">
        <div className="grid gap-2">
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black"></div> Memory name:
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="the night the wain never stopped."
            className="outline-none ml-5 pl-3 py-1 border border-zinc-400 focus:border-zinc-600 w-80"
          />
        </div>
        <div className="grid gap-2">
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black"></div> Little description:
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="we had nowhere to go, so we just stayed."
            className="outline-none ml-5 pl-3 py-1 border border-zinc-400 focus:border-zinc-600 w-80"
          />
        </div>
        <div className="grid gap-2">
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black"></div> Img fragment:
          </span>
          <div className="relative flex items-center gap-5">
            <div>
              <div className="relative border border-zinc-400 ml-5 grid items-center justify-center w-80 h-40">
                <p className="text-zinc-500">
                  select or drag and drop your image
                </p>
                <div className="absolute w-2 h-2 rounded-full bg-black -top-1 -left-1"></div>
                <div className="absolute w-2 h-2 rounded-full bg-black -bottom-1 -left-1"></div>
                <div className="absolute w-2 h-2 rounded-full bg-black -bottom-1 -right-1"></div>
                <div className="absolute w-2 h-2 rounded-full bg-black -top-1 -right-1"></div>
              </div>
              <input
                type="file"
                name=""
                id=""
                placeholder="we had nowhere to go, so we just stayed."
                className="top-0 h-full absolute outline-none ml-5 pl-3 py-1 border border-zinc-400 focus:border-zinc-600 w-80 opacity-0 cursor-pointer"
              />
            </div>
            <div>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-black"></div> Pd:
              </span>
              <input
                type="areat"
                name=""
                id=""
                placeholder="we had nowhere to go, so we just stayed."
                className="outline-none ml-5 pl-3 py-1 border border-zinc-400 focus:border-zinc-600 w-40"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black"></div> Soundtrack this:
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="we had nowhere to go, so we just stayed."
            className="outline-none ml-5 pl-3 py-1 border border-zinc-400 focus:border-zinc-600 w-80"
          />
        </div>
        <div className="flex">
          <Link
            href="/lostpreview"
            className="bg-zinc-900 text-[#FF3C00] py-5 px-4 mt-2 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,0_100%)] w-90"
          >
            Save this for posterity.
          </Link>
        </div>
      </div>
    </div>
  );
}
