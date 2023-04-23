import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GrCart } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  openLogin: boolean;
  setOpenLogin: (openLogin: boolean) => void;
};

const Navbar = ({ setOpenLogin, openLogin }: Props) => {
  return (
    <nav className="flex justify-between w-full p-4 text-sm">
      <ul className="z-10 flex items-center justify-center bg-transparent gap-14">
        <li>
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={75}
              height={75}
              alt={"LOGO"}
              className="z-10 cursor-pointer"
            />
          </Link>
        </li>
        <li>
          <Link href={`/products?data=${"allProducts"}`}>All Products</Link>
        </li>
        <li>
          <Link href={`/products?data=${"filaSneakers"}`}>Fila Sneakers</Link>
        </li>
        <li>
          <Link href={`/products?data=${"worldBalance"}`}>World Balance</Link>
        </li>
      </ul>
      <ul className="z-10 flex items-center justify-center gap-10 bg-transparent">
        <li>
          <input
            type="text"
            placeholder={"Search..."}
            className="p-2 rounded bg-opacity-5"
          />
        </li>
        <li>
          <button>
            <GrCart />
          </button>
        </li>
        <li>
          <button
            onClick={() => setOpenLogin(!openLogin)}
            className="px-2 py-1  text-white bg-[#4B0082] rounded shadow"
          >
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
