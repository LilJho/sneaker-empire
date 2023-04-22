import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <main className="flex w-full h-[100vh] justify-center items-center gap-8">
      <section className="z-10 max-w-[20rem]">
        <h1 className="text-4xl font-semibold font-Playfair">Sneaker Empire</h1>
        <p className="text-lg text-gray-700 font-WorkSans">
          Designs that You will Love
        </p>
        <p className="text-sm text-gray-700 font-WorkSans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt
          nam et non libero iure dolores quam odit repudiandae nostrum,
          obcaecati beatae dignissimos eos deleniti, ipsum repellat praesentium
          magnam consectetur.
        </p>
        <button className="px-2 py-1 mt-4 text-white bg-[#4B0082] rounded shadow">
          Buy now!
        </button>
      </section>
      <aside className="z-10">
        <Image
          src={"/heroBG/herobg.svg"}
          width={400}
          height={400}
          alt="Hero Background Image"
          className="z-10 shadow drop-shadow"
        />
      </aside>
    </main>
  );
};

export default Herosection;
