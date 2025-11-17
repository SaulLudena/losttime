import DecryptedText from "../utils/decryptedText";

export default function decryptedblock() {
  return (
    <div className=" text-2xl tracking-[1px] relative">
      <DecryptedText
        text="LostTime.miss"
        speed={25} // Velocidad entre iteraciones (ms)
        maxIterations={32} // Máx. número de iteraciones aleatorias
        sequential={true} // Revelar carácter por carácter
        revealDirection="left" // Desde el centro hacia afuera
        parentClassName="font-mono" // Contenedor principal
        encryptedClassName="text-zinc-600" // Texto aún cifrado
        animateOn="view" // Activa animación al pasar el mouse
        className=""
      />
      <div className="bg-zinc-900 w-2 h-2 rounded-full absolute -top-10 -left-20"></div>
      <div className="bg-zinc-900 w-2 h-2 rounded-full absolute -bottom-10 -left-20"></div>
      <div className="bg-zinc-900 w-2 h-2 rounded-full absolute -top-10 -right-10"></div>
      <div className="bg-zinc-900 w-2 h-2 rounded-full absolute -bottom-10 -right-10"></div>
    </div>
  );
}
