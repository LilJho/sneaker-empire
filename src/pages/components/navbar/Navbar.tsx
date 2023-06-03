import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GrCart } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import useToggle from "../../../../hooks/useToggle";
import Modal from "../cart/Modal";
import Cart from "../cart/Cart";

type Props = {
  openLogin: boolean;
  setOpenLogin: (openLogin: boolean) => void;
};

interface shoesProps {
  id: string;
  name: string;
  price: number;
  images: string;
  trending: boolean;
  unisex: boolean;
  color: string;
  gender: string;
}

const Navbar = ({ setOpenLogin, openLogin }: Props) => {
  // Get the cartItems in a globalize state
  const cartItems = useSelector((state: { cart: shoesProps[] }) => state.cart);

  // toggle the cart
  const [showCart, toggleCart] = useToggle();

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
          <button onClick={toggleCart}>
            <div className="relative w-5 h-5">
              <span className="absolute top-[-15px] right-[-15px] px-1 py-0.2 text-[10px] text-white bg-blue-600 rounded-full">
                {cartItems.length}
              </span>
              <GrCart className="w-5 h-5" />
            </div>
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
      {showCart && (
        <Modal isOpen={showCart} closeModal={toggleCart}>
          <Cart closeModal={toggleCart} />
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
