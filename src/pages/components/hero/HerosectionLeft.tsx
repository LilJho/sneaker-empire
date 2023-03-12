import React from "react";

const HerosectionLeft = () => {
  return (
    <section className="w-full h-[80%] flex justify-center items-center">
      <article className="w-[35rem]">
        <h2 className="text-[8rem] font-Playfair font-bold leading-none">
          Sneakers
        </h2>
        <h4 className="text-4xl font-WorkSans">Designs that You will love</h4>
        <p className="font-WorkSans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          labore neque exercitationem autem alias animi ad quam eos culpa
          veritatis.
        </p>
        <button className="p-4 bg-[#4B0082] font-Playfair text-white rounded-2xl mt-2">
          Buy Now!
        </button>
      </article>
    </section>
  );
};

export default HerosectionLeft;
