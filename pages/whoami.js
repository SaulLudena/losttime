import LateralMenu from "../src/components/lateralmenu";
import Whoamihero from "../src/components/whoiamhero";
export default function Whoami() {
  return (
    <div className=" h-screen w-full ">
      <div className="w-full h-full grid grid-cols-12">
        <div className="col-span-3 max-xl:col-span-0 w-full">
          <LateralMenu />
        </div>
        <div className="col-span-9 max-xl:col-span-12">
          <Whoamihero />
        </div>
      </div>
    </div>
  );
}
