import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarLeft = () => {
  return (
    <nav className="lg:w-full">
      <div className="flex justify-between p-4">
        <div>
          <Image
            src={"/logo.svg"}
            width={100}
            height={100}
            alt={"LOGO"}
            className="cursor-pointer sm:w-[10rem] "
          />
        </div>
        <div className="lg:hidden sm:block">
          <GiHamburgerMenu className="sm:w-[5rem] sm:h-[5rem]" />
        </div>

        <ul className="font-Playfair lg:text-2xl lg:flex lg:gap-[4rem] cursor-pointer mr-[15rem] sm:hidden">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLeft;
