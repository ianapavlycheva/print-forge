import Link from "next/link";
// import Image from "next/image";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <img
              src={PFLogo.src}
              alt="PrintForge Logo"
              className="w-[200px] h-auto hidden md:block"
            />
            {/* <Image
              src={PFLogo}
              alt="PrintForge Logo"
              width={200}
              height={60} // approximate height for aspect ratio
              className="hidden md:block h-auto w-[200px]"
            /> */}
            {/* Mobile Logo */}
            <img
              src={PFLogoIcon.src}
              alt="PrintForge Logo"
              className="w-[40px] h-auto block md:hidden"
            />
            {/* <Image
              src={PFLogoIcon}
              alt="PrintForge Logo"
              width={40}
              height={40}
              className="block md:hidden h-auto w-[40px]"
            /> */}
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/3d-models">3D Models</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
