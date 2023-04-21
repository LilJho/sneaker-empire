import Image from "next/image";

const PopularSection = () => {
  return (
    <section className="flex justify-center my-[8rem] flex-col items-center w-full ">
      <h4 className=" font-Playfair text-[6rem] z-10">Most Popular</h4>
      <div className="z-10 flex gap-5 mt-10">
        <figure className="font-bold text-center font-WorkSans">
          <Image
            src={"/popular/image1.jpg"}
            width={350}
            height={350}
            alt={"Popular Sneakers"}
            className="rounded-2xl"
          />
          <figcaption className="text-[2rem] lg:text-base">
            Black Shoes
          </figcaption>
        </figure>

        <figure className="hidden font-bold text-center font-WorkSans lg:block">
          <Image
            src={"/popular/image2.jpg"}
            width={350}
            height={350}
            alt={"Popular Sneakers"}
            className="rounded-2xl"
          />
          <figcaption>Running Shoes</figcaption>
        </figure>

        <figure className="hidden font-bold text-center font-WorkSans lg:block ">
          <Image
            src={"/popular/image3.jpg"}
            width={350}
            height={350}
            alt={"Popular Sneakers"}
            className="rounded-2xl"
          />
          <figcaption>Casual Shoes</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default PopularSection;
