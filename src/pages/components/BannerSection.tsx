import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="relative z-10 mt-[10rem] flex justify-center items-center flex-col">
      <figure>
        <Image
          src={"/bgimage/bg1.svg"}
          width={1200}
          height={700}
          alt="People sitting with shoes"
          className="relative z-20"
        />
        <figcaption className="absolute z-30 flex flex-col items-center justify-center gap-2 p-4 bg-gray-300 shadow-md bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-xl left-40 top-40">
          <p className="text-2xl font-semibold text-gray-800 font-Playfair">
            Gives value to your feet
          </p>
          <button className="px-4 py-2 bg-[#4B0082] text-white font-WorkSans rounded">
            Shop Now!
          </button>
        </figcaption>
      </figure>
      <figure className="">
        <Image
          src={"/bgimage/bg2.jpg"}
          width={2000}
          height={700}
          alt="People sitting with shoes"
          className="relative z-20"
        />
        <figcaption className="absolute z-30 flex flex-col items-center justify-center gap-2 p-4 bg-white shadow-md bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-xl right-20 bottom-20">
          <p className="text-2xl font-semibold text-gray-900 font-Playfair">
            Elevate your Performance
          </p>
          <button className="px-4 py-2 bg-[#4B0082] text-white font-WorkSans rounded">
            Shop Now!
          </button>
        </figcaption>
      </figure>
    </section>
  );
};

export default BannerSection;
