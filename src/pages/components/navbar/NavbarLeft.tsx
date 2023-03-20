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
            className="cursor-pointer"
          />
        </div>
        <div className="block lg:hidden">
          <GiHamburgerMenu className="w-[5rem] h-[5rem]" />
        </div>

        <ul className="font-Playfair text-2xl lg:flex lg:gap-[4rem] cursor-pointer mr-[15rem] hidden">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLeft;
