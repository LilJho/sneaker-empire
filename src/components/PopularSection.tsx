import Image from "next/image";

const PopularSection = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center w-full gap-4 mt-[5rem]">
      <h4 className="text-xl font-bold font-Playfair">Most Popular</h4>
      <article className="flex gap-2">
        <figure className="text-center">
          <Image
            src={"/popular/image1.jpg"}
            width={350}
            height={350}
            alt={"Popular Sneakers"}
            className="rounded-2xl"
          />
          <figcaption className="font-semibold">Black Shoes</figcaption>
        </figure>
        <figure className="text-center">
          <Image
            src={"/popular/image2.jpg"}
            width={350}
            height={350}
            alt={"Popular Sneakers"}
            className="rounded-2xl"
          />
          <figcaption className="font-semibold">Sport Shoes</figcaption>
        </figure>
        <figure className="text-center">
          <Image
            src={"/popular/image3.jpg"}
            width={350}
            height={350}
            alt={"Popular Sneakers"}
            className="rounded-2xl"
          />
          <figcaption className="font-semibold">Casual Shoes</figcaption>
        </figure>
      </article>
    </section>
  );
};

export default PopularSection;
