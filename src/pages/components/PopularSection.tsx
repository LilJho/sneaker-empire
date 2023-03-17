import Image from "next/image";

const PopularSection = () => {
  return (
    <section className="flex justify-center my-[8rem] flex-col items-center w-[100rem] lg:w-[120rem]">
      <h4 className=" font-Playfair text-[6rem]">Most Popular</h4>
      <div className="flex gap-5 mt-10">
        <figure className="font-bold text-center font-WorkSans">
          <Image
            src={"/popular/image1.jpg"}
            width={350}
            height={350}
            alt={"Popular Sneakers"}
            className="rounded-[5rem] w-[60rem] h-[30rem]"
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

        <figure className="hidden font-bold text-center font-WorkSans lg:block">
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
