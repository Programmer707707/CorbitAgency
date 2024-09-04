import Logo from "@/images/logo.png";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
const Navigation = () => {
  return (
    <div className="bg-dark pt-4">
        <div className="container mx-auto">
            <header className="flex justify-between items-center">
                <Image src={Logo} alt="logo" width={200} className="cursor-pointer" />
                <Link href="#contact"><Button/></Link>
            </header>
        </div>
    </div>
  )
}

export default Navigation