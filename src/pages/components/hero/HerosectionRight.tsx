import Image from "next/image";

const HerosectionRight = () => {
  return (
    <article className="w-full h-[80%] flex justify-center items-center overflow-visible">
      <Image
        src={"/heroBG/herobg.svg"}
        width={600}
        height={600}
        alt="Hero Background Image"
        className="relative z-10 right-[5rem] shadow drop-shadow lg:right-[5rem]"
      />
    </article>
  );
};

export default HerosectionRight;
