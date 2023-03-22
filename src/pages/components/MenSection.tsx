import Image from "next/image";
import React, { useEffect } from "react";
import NavbarLeft from "./navbar/NavbarLeft";
import NavbarRigth from "./navbar/NavbarRigth";
import { BiDownArrow } from "react-icons/bi";

const MenSection = ({ shoesData }) => {
  if (!shoesData) {
    return <h1>Loading</h1>;
  }
  return (
    <main>
      <div className="flex justify-between w-full">
        <div className="w-full lg:w-[70%]">
          <NavbarLeft />
        </div>
        <div className="hidden lg:block w-[30%]">
          <NavbarRigth />
        </div>
      </div>
      <section className="flex flex-col items-center justify-center w-full p-4 mt-2">
        <div className="flex items-center justify-between gap-[34rem] font-Playfair">
          <h2 className="text-2xl ">Nike Shoes</h2>
          <div className="flex items-center gap-1">
            <p>Sort By</p>
            <BiDownArrow />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {shoesData.map((shoeData) => (
            <Post shoeData={shoeData} />
          ))}
        </div>
      </section>
    </main>
  );
};

const Post = ({ shoeData }) => {
  return (
    <figure className="p-4" key={shoeData.id}>
      <Image
        src={shoeData.images}
        width={300}
        height={300}
        alt="A shoe in the items list"
      />
      <figcaption className="text-center">
        <h4 className="text-base font-Playfair">{shoeData.name}</h4>
        <p className="text-sm text-gray-500 font-WorkSans">
          color: {shoeData.color}
        </p>
        <p className="text-sm text-gray-500 font-WorkSans">
          Gender: {shoeData.gender}
        </p>
        <p className="text-sm font-Playfair">Price: {shoeData.price}</p>
      </figcaption>
    </figure>
  );
};
export default MenSection;
