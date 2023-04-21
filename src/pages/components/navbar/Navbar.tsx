import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full p-4 text-sm">
      <ul className="z-10 flex bg-transparent gap-14">
        <li>
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={50}
              height={50}
              alt={"LOGO"}
              className="z-10 cursor-pointer"
            />
          </Link>
        </li>
        <li>
          <Link href={"/"}>All Products</Link>
        </li>
        <li>
          <Link href={"/"}>Fila Sneakers</Link>
        </li>
        <li>
          <Link href={"/"}>World Balance</Link>
        </li>
      </ul>
      <ul className="z-10 flex gap-10 bg-transparent">
        <li>
          <button>
            <GoSearch />
          </button>
        </li>
        <li>
          <button>
            <GrCart />
          </button>
        </li>
        <li>
          <button className="px-2 text-white bg-[#4B0082] rounded shadow">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
