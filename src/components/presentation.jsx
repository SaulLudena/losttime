import Link from "next/link";
import DecryptedText from "../utils/decryptedText";
export default function Presentation() {
  return (
    <div className=" grid h-full   items-center max-w-[1600px] m-auto w-[80%] ">
      <div className="grid gap-7">
        <div className="grid gap-2">
          <span className="flex items-center gap-2 text-5xl">
            <div className="w-3 h-3 bg-black"></div>{" "}
            <DecryptedText
              text="¿Do you remember this?"
              speed={35} // Velocidad entre iteraciones (ms)
              maxIterations={32} // Máx. número de iteraciones aleatorias
              sequential={true} // Revelar carácter por carácter
              revealDirection="left" // Desde el centro hacia afuera
              parentClassName="font-mono" // Contenedor principal
              encryptedClassName="text-zinc-600" // Texto aún cifrado
              animateOn="view" // Activa animación al pasar el mouse
              className=""
            />
          </span>
          <span className="flex items-center gap-2">
            Navigate through options in the menu
          </span>
          <div className="flex">
            <Link
              href="/go"
              className="bg-orange-600 text-black py-5 px-4 mt-2 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,0_100%)]"
            >
              Activate node
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
