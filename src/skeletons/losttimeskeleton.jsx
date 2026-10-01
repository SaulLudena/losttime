import React from "react";

export default function Losttimeskeleton() {
  const SkeletonBlock = ({ className = "" }) => (
    <div className={`bg-zinc-300/80 rounded ${className}`} />
  );
  return (
    <div>
      <div className="grid grid-cols-12 w-full animate-pulse">
        {/* IMAGE */}
        <div className="col-span-4">
          <div
            className="w-full h-80 bg-zinc-300
            [clip-path:polygon(0_0,100%_0,100%_100%,30px_100%,0_calc(100%_-_30px))]"
          />
        </div>

        {/* CONTENT */}
        <div className="col-span-5 p-2 bg-[#CBCBCB]">
          <div className="p-4 flex flex-col justify-between h-full gap-5">
            {/* TITLE */}
            <SkeletonBlock className="h-8 w-3/4" />

            {/* TEXT */}
            <div className="grid gap-2">
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-5/6" />
            </div>

            {/* AUDIO */}
            <SkeletonBlock className="h-12 w-full rounded-md" />
          </div>
        </div>

        {/* RIGHT DECORATION */}
        <div className="col-span-2 max-2xl:col-span-3">
          <div
            className="w-full h-full grid grid-rows-12
            bg-gradient-to-b from-zinc-400 to-zinc-500
            [clip-path:polygon(0_0,calc(100%_-_30px)_0,100%_30px,100%_100%,0_100%)]"
          >
            {/* BLOCKS */}
            <div className="row-span-9 grid grid-cols-4 grid-rows-4">
              <SkeletonBlock className="row-span-1" />
              <SkeletonBlock className="row-span-2" />
              <SkeletonBlock className="row-span-3" />
              <SkeletonBlock
                className="row-span-4
                [clip-path:polygon(0_0,calc(100%_-_30px)_0,100%_30px,100%_100%,0_100%)]"
              />
            </div>

            {/* CODE */}
            <div className="row-span-3 p-4 flex flex-col justify-center gap-2">
              <SkeletonBlock className="h-3 w-20" />
              <SkeletonBlock className="h-6 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
