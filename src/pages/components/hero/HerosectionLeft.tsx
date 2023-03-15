import Image from "next/image";
import React from "react";

const HerosectionLeft = () => {
  return (
    <section className="lg:w-full lg:h-[80%] flex justify-center items-center sm:flex-col sm:h-[100rem]">
      <div>
        <Image
          src={"/heroBG/mdshoe.png"}
          width={800}
          height={300}
          alt="Image of a shoe"
          className="sm:rounded-[8rem] lg:hidden bg-sky-200"
        />
      </div>
      <article className="lg:w-[35rem] sm:w-[50rem] sm:text-center">
        <h2 className="lg:text-[8rem] font-Playfair font-bold leading-none sm:text-[12rem]">
          Sneakers
        </h2>
        <h4 className="lg:text-4xl font-WorkSans sm:text-[4rem] sm:mt-4">
          Designs that You will love
        </h4>
        <p className="font-WorkSans lg:text-base sm:text-[2rem] sm:mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          labore neque exercitationem autem alias animi ad quam eos culpa
          veritatis.
        </p>
        <button className="p-4 bg-[#4B0082] font-Playfair text-white rounded-2xl lg:text-base mt-2 sm:text-[2rem] sm:mt-4">
          Buy Now!
        </button>
      </article>
    </section>
  );
};

export default HerosectionLeft;
