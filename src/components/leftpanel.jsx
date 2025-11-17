import { useState } from "react";
import LostTimeLogo from "./losttimelogo";
import DecryptedText from "@/components/DecryptedText";
import Link from "next/link";
export default function Leftpanel() {
  return (
    <div className=" h-full px-10   w-full grid justify-between ">
      <div className="grid gap-10 h-full  w-full">
        <LostTimeLogo />
        <ul className="w-full ">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.to}
                className=" hover:bg-zinc-900 cursor-pointer items-center py-1 px-3 hover:text-zinc-100 group flex gap-1 "
              >
                <span className="hidden group-hover:block">{">"}</span>

                <div className=" text-xl tracking-[1px] ">
                  <DecryptedText
                    text={item.label}
                    speed={45} // Velocidad entre iteraciones (ms)
                    maxIterations={52} // Máx. número de iteraciones aleatorias
                    sequential={true} // Revelar carácter por carácter
                    revealDirection="left" // Desde el centro hacia afuera
                    parentClassName="font-mono" // Contenedor principal
                    encryptedClassName="text-zinc-800" // Texto aún cifrado
                    animateOn="view" // Activa animación al pasar el mouse
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" w-full text-lg  justify-end h-full flex flex-col pb-24">
        <div className="font-mono leading-5">
          <div className="relative">
            {/* 1. Texto fantasma que define la altura final */}
            <div className="invisible whitespace-pre-line pointer-events-none">
              {`> Ready? Go.

Humans have a need to miss the ones who were special to them. That’s why we want to save our beautiful moments together.
-------------
thai 2b 2025b.
      thai 2b 2025b.
0035 l-Audio (Complete the form to.)
-------------
`}
            </div>

            {/* 2. Texto animado superpuesto */}
            <div className="absolute inset-0 whitespace-pre-line ">
              <DecryptedText
                text={`> Ready? Go.

Humans have a need to miss the ones who were special to them. That’s why we want to save our beautiful moments together.
-------------
thai 2b 2025b.
      thai 2b 2025b.
0035 l-Audio (Complete the form to.)
-------------
`}
                speed={6}
                maxIterations={32}
                sequential={true}
                revealDirection="left"
                parentClassName="font-mono"
                encryptedClassName="text-zinc-400"
                animateOn="view"
                onComplete={() => setShowButton(true)}
              />
            </div>
          </div>

          <div>
            <div className="bg-zinc-900 text-zinc-50 py-5 px-4 mt-2 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,0_100%)]">
              Can you avoid it?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const menu = [
  {
    label: "START LOSING TIME",
    to: "/go",
  },
  {
    label: "SEEK",
    to: "/seek",
  },
  {
    label: "GITHUB",
    to: "someurl",
  },
];
