import { useEffect, useRef, useState } from "react";
import LostTimeLogo from "./losttimelogo";
import DecryptedText from "@/components/DecryptedText";
import Link from "next/link";
export default function LateralMenu() {
  const [showButton, setShowButton] = useState(false);
  const audioRef = useRef(null);

  // 🔥 SOLO se ejecuta en el cliente
  useEffect(() => {
    audioRef.current = new Audio("/audio/audiolostime.mp3");
    audioRef.current.volume = 0.4;
  }, []);

  const handleClickSound = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <div className="h-full px-10 w-full flex flex-col justify-between">
      <div className="flex flex-col gap-20 w-full pt-8">
        <LostTimeLogo />
        <ul className="w-full">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.to}
                className="hover:bg-orange-600 cursor-pointer items-center py-1 px-3 hover:black group flex gap-1"
                onClick={handleClickSound}
              >
                <span className="hidden group-hover:block">{">"}</span>

                <div className="text-xl tracking-[1px]">
                  <DecryptedText
                    text={item.label}
                    speed={45}
                    maxIterations={52}
                    sequential={true}
                    revealDirection="left"
                    parentClassName="font-mono"
                    encryptedClassName="text-zinc-800"
                    animateOn="view"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full text-lg flex flex-col pb-24">
        <div className="font-mono leading-5">
          <div className="relative">
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
            <div className="absolute inset-0 whitespace-pre-line">
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
                onComplete={() => setShowButton(true)} // Activa el estado para el botón
              />
            </div>
          </div>

          {/* Botón/Caja de diálogo, ahora condicional basado en la animación (si lo necesitas) */}
          <div className="mt-2">
            {/* Se muestra el botón si el texto ha terminado de descifrarse */}
            {showButton && (
              <div className="bg-zinc-900 text-zinc-50 py-5 px-4 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,0_100%)]">
                Did you understand?
              </div>
            )}
            {/* Si no quieres que sea condicional, simplemente quita el 'showButton &&' */}
          </div>
        </div>
      </div>
    </div>
  );
}

// Datos del menú
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
