import Image from "next/image";

const BannerSection = () => {
  return (
    <section>
      <article>
        <div className="z-10">
          <Image src={"/bgimage/bg1.jpg"} fill alt="Background Image One" />
          <div className="max-w-[14rem]">
            <h4 className="text-4xl font-bold font-Playfair">
              Gives value to your feet
            </h4>

            <button className="p-4 bg-[#4B0082] font-Playfair text-white rounded-2xl mt-2 ">
              Shop Now!
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BannerSection;
