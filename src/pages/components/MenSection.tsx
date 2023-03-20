import Image from "next/image";
import React from "react";
import NavbarLeft from "./navbar/NavbarLeft";
import NavbarRigth from "./navbar/NavbarRigth";
import { BiDownArrow } from "react-icons/bi";

const MenSection = () => {
  return (
    <main>
      <div className="flex justify-between w-full">
        <div className="w-full lg:w-[70%">
          <NavbarLeft />
        </div>
        <div className="hidden lg:block w-[30%]">
          <NavbarRigth />
        </div>
      </div>
      <section className="w-full p-4 mt-2">
        <div className="flex items-center justify-between font-Playfair">
          <h2 className="text-2xl ">Men's Shoes</h2>
          <div className="flex items-center gap-1">
            <p>Sort By</p>
            <BiDownArrow />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
        </div>
      </section>
    </main>
  );
};

const Post = () => {
  return (
    <figure className="mt-1">
      <Image
        src={"/items/shoe-item.jpg"}
        width={500}
        height={500}
        alt="A shoe in the items list"
      />
      <figcaption>
        <h4 className="text-base font-Playfair">
          Air Jordan 1 Retro High OG Craft
        </h4>
        <p className="text-sm text-gray-500 font-WorkSans">Men’s Shoes</p>
        <p className="text-sm text-gray-500 font-WorkSans">1 Colour</p>
        <p className="text-sm font-Playfair">9,895 Php</p>
      </figcaption>
    </figure>
  );
};
export default MenSection;
