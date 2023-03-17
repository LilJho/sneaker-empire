import Image from "next/image";

const PopularSection = () => {
  return (
    <section className="flex justify-center my-[8rem] flex-col items-center w-[100rem] 2xl:w-[120rem]">
      <h4 className=" font-Playfair sm:text-[6rem]">Most Popular</h4>
      <div className="flex gap-5 mt-10">
        <figure className="font-bold text-center font-WorkSans">
          <Image
            src={"/popular/image1.jpg"}
            width={350}
            height={350}
            alt={"Popular Sneakers"}
            className="lg:rounded-2xl lg:w-[22rem] lg:h-[14.5rem] sm:w-[60rem] sm:h-[30rem]"
          />
          <figcaption className="sm:text-[2rem] lg:text-base">
            Black Shoes
          </figcaption>
        </figure>

        <figure className="font-bold text-center font-WorkSans sm:hidden lg:block">
          <Image
            src={"/popular/image2.jpg"}
            width={350}
            height={350}
            alt={"Popular Sneakers"}
            className="rounded-2xl"
          />
          <figcaption>Running Shoes</figcaption>
        </figure>

        <figure className="font-bold text-center font-WorkSans sm:hidden lg:block">
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
