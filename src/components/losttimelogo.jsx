import Decryptedblock from "../components/decryptedblock";
import Image from "next/image";
import LogoImage from "../../public/losttimelogo.png";
import Link from "next/link";
export default function Losttimelogo() {
  return (
    <Link href="/" className="flex items-center pt-10">
      <Image src={LogoImage} alt="Lost Time Logo" className="w-20 " />
      <Decryptedblock />;
    </Link>
  );
}
