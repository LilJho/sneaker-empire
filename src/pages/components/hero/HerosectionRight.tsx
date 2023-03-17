import Image from "next/image";

const HerosectionRight = () => {
  return (
    <article className="flex items-center justify-center w-full h-full overflow-visible">
      <Image
        src={"/heroBG/herobg.svg"}
        width={600}
        height={600}
        alt="Hero Background Image"
        className="relative z-10 right-[5rem] shadow drop-shadow"
      />
    </article>
  );
};

export default HerosectionRight;
