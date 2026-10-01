import DecryptedText from "../utils/decryptedText";

export default function decryptedblock() {
  return (
    <div className=" text-xl tracking-[1px] relative flex items-center  ">
      <DecryptedText
        text="LostTime.miss"
        speed={25} // Velocidad entre iteraciones (ms)
        maxIterations={32} // Máx. número de iteraciones aleatorias
        sequential={true} // Revelar carácter por carácter
        revealDirection="left" // Desde el centro hacia afuera
        parentClassName="font-mono" // Contenedor principal
        encryptedClassName="text-zinc-600" // Texto aún cifrado
        animateOn="view" // Activa animación al pasar el mouse
        className="max-xl:text-sm"
      />
      <>
        <div
          className="bg-zinc-700 absolute rounded-full 
    w-2 h-2 -top-5 -left-12 
   max-xl:-top-3 max-xl:-left-6"
        ></div>

        <div
          className="bg-zinc-700 absolute rounded-full 
    w-2 h-2 -bottom-5 -left-12 
     max-xl:-bottom-3 max-xl:-left-6"
        ></div>

        <div
          className="bg-zinc-700 absolute rounded-full 
    w-2 h-2 -top-5 -right-7 
    max-xl:-top-3 max-xl:-right-4"
        ></div>

        <div
          className="bg-zinc-700 absolute rounded-full 
    w-2 h-2 -bottom-5 -right-7 
    max-xl:-bottom-3 max-xl:-right-4"
        ></div>
      </>
    </div>
  );
}
