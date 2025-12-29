import Decryptedblock from "../components/decryptedblock";
import Image from "next/image";
import LogoImage from "../../public/losttimelogo.png";
import Link from "next/link";
export default function Losttimelogo() {
  return (
    <Link href="/" className="flex items-center pt-10 gap-2">
      <Image src={LogoImage} alt="Lost Time Logo" className="w-10 " />
      <Decryptedblock />;
    </Link>
  );
}
