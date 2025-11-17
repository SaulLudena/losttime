import LateralMenu from "../src/components/lateralmenu";
import SeekEngine from "../src/components/seekengine";
export default function Seek() {
  return (
    <div className=" h-screen w-full ">
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-3 w-full">
          <LateralMenu />
        </div>
        <div className="col-span-9 ">
          <SeekEngine />
        </div>
      </div>
    </div>
  );
}
