import Image from "next/image";

const PopularSection = () => {
  return (
    <section className="flex justify-center flex-col mt-[8rem] items-center">
      <h4 className="text-6xl font-Playfair">Most Popular</h4>
      <div className="mt-10 flex gap-5">
        <figure className="text-center font-WorkSans font-bold">
          <Image
            src={"/popular/image1.jpg"}
            width={350}
            height={350}
            alt={"Popular Sneakers"}
            className="rounded-2xl"
          />
          <figcaption>Black Shoes</figcaption>
        </figure>
        <figure className="text-center font-WorkSans font-bold">
          <Image
            src={"/popular/image2.jpg"}
            width={350}
            height={350}
            alt={"Popular Sneakers"}
            className="rounded-2xl"
          />
          <figcaption>Running Shoes</figcaption>
        </figure>
        <figure className="text-center font-WorkSans font-bold">
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
