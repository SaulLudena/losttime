"use client";
import { useEffect, useRef, useState } from "react";
import DecryptedText from "@/components/DecryptedText";
import ColorThief from "colorthief";
import MediaPlayer from "./mediaPlayer";
export default function Losttimecard({ data }) {
  const [colors, setColors] = useState({
    strong: null,
    soft: null,
  });
  const audioRef = useRef(null);
  const colorThief = new ColorThief();
  function getColors(imgUrl) {
    if (!imgUrl) return;

    const img = new Image();
    img.crossOrigin = "anonymous"; // minúsculas

    img.src = imgUrl;

    img.onload = () => {
      const palette = colorThief.getPalette(img, 6);

      const { strong, soft } = getStrongAndSoftColors(palette);

      setColors({ strong, soft });

      console.log("Fuerte:", strong);
      console.log("Suave:", soft);
    };
  }
  function rgbToHex([r, g, b]) {
    return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
  }
  function getStrongAndSoftColors(palette) {
    // strong → el color más saturado
    // soft   → el color más claro (luminoso)

    let strong = palette[0];
    let soft = palette[0];

    let maxSaturation = -1;
    let maxLightness = -1;

    for (const rgb of palette) {
      const { s, l } = rgbToHsl(rgb);

      if (s > maxSaturation) {
        maxSaturation = s;
        strong = rgb;
      }

      if (l > maxLightness) {
        maxLightness = l;
        soft = rgb;
      }
    }

    return { strong, soft };
  }
  function rgbToHsl([r, g, b]) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  }
  function getColors(imgUrl) {
    if (!imgUrl) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imgUrl;

    img.onload = () => {
      const palette = colorThief.getPalette(img, 6);

      const { strong, soft } = getStrongAndSoftColors(palette);

      setColors({
        strong: {
          rgb: strong,
          hex: rgbToHex(strong),
        },
        soft: {
          rgb: soft,
          hex: rgbToHex(soft),
        },
      });

      console.log("Fuerte HEX:", rgbToHex(strong));
      console.log("Suave HEX:", rgbToHex(soft));
    };
  }
  const [datatest, setDatatest] = useState({
    text1: data.memory_name || "Title here",
    text2: data.memory_description || "Just more then without sense",
    text3: data.image_pd || "Just text",
    image: data.image_url,
    audio: data.audio_url,
  });

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
    getColors(datatest.image);
  }, [datatest.image]);

  return (
    <div className=" ">
      <div className="  grid grid-cols-12 w-full">
        <div className=" col-span-4">
          <img
            src={datatest.image}
            alt="no hubo"
            className="object-cover w-full h-80  [clip-path:polygon(0_0,100%_0,100%_100%,30px_100%,0_calc(100%_-_30px))]"
          />
        </div>
        <div className=" col-span-5 p-2  bg-[#CBCBCB]">
          {datatest && (
            <div className="p-4 flex flex-col justify-between h-full gap-5">
              <p className="text-3xl font-bold">
                <DecryptedText
                  text={datatest.text1}
                  speed={45}
                  maxIterations={52}
                  sequential={true}
                  revealDirection="left"
                  parentClassName="font-mono"
                  encryptedClassName="text-zinc-800"
                  animateOn="view"
                />
              </p>
              <div className="grid gap-2">
                <p className="leading-4">
                  {"> "}

                  <DecryptedText
                    text={datatest.text3}
                    speed={25}
                    maxIterations={52}
                    sequential={true}
                    revealDirection="left"
                    parentClassName="font-mono"
                    encryptedClassName="text-zinc-800"
                    animateOn="view"
                  />
                </p>
                <p className="leading-4 flex gap-2">
                  {"> "}
                  <DecryptedText
                    text={datatest.text2}
                    speed={20}
                    maxIterations={52}
                    sequential={true}
                    revealDirection="left"
                    parentClassName="font-mono"
                    encryptedClassName="text-zinc-800"
                    animateOn="view"
                  />
                </p>
              </div>
              <div className="">
                <div className="flex ">
                  <MediaPlayer audioRef={audioRef} src={datatest.audio} />
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className=" col-span-2 max-2xl:col-span-3 "
          style={{
            "--soft": colors.soft?.hex ?? "#10120F",
            "--strong": colors.strong?.hex ?? "#5D6C64",
          }}
        >
          <div
            style={{
              "--from": colors.soft?.hex ?? "#10120F",
              "--to": colors.strong?.hex ?? "#5D6C64",
            }}
            className="w-full h-full grid grid-rows-12 bg-gradient-to-b
    from-[var(--from)] to-[var(--to)]
    [clip-path:polygon(0_0,calc(100%_-_30px)_0,100%_30px,100%_100%,0_100%)]"
          >
            <div className=" row-span-9 grid grid-cols-4 grid-rows-4">
              {/* 1 */}
              <div className="grid-cols-1 row-span-1 bg-gradient-to-b from-[var(--soft)] to-[var(--strong)]"></div>

              {/* 2 */}
              <div className="grid-cols-1 row-span-2 bg-gradient-to-b from-[var(--soft)] to-[var(--strong)]"></div>

              {/* 3 */}
              <div className="grid-cols-1 row-span-3 bg-gradient-to-b from-[var(--strong)] to-[var(--soft)]"></div>

              {/* 4 */}
              <div
                className="grid-cols-1 row-span-4 bg-gradient-to-b from-[var(--strong)] to-[var(--soft)]
      [clip-path:polygon(0_0,calc(100%_-_30px)_0,100%_30px,100%_100%,0_100%)]"
              ></div>
            </div>
            <div className="w-full h-full grid items-center  row-span-3 p-4 text-white">
              <span className="text-sm leading-[0.6]">Lost code</span>
              <span className="text-3xl leading-[0.6]">LT-000{data.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
