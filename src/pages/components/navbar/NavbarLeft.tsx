import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarLeft = () => {
  return (
    <nav className="lg:w-full">
      <div className="flex justify-between p-4">
        <div>
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={100}
              height={100}
              alt={"LOGO"}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="block lg:hidden">
          <GiHamburgerMenu className="w-[5rem] h-[5rem]" />
        </div>

        <ul className="font-Playfair text-2xl lg:text-base lg:flex lg:gap-[4rem] cursor-pointer mr-[15rem] hidden">
          <li>
            <Link href={`/NavLinkSection?data=${"allProducts"}`}>
              All Products
            </Link>
          </li>
          <li>
            <Link href={`/NavLinkSection?data=${"filaSneakers"}`}>
              Fila Sneakers
            </Link>
          </li>
          <li>
            <Link href={`/NavLinkSection?data=${"worldBalance"}`}>
              World Balance
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLeft;
