import Image from "next/image";

const BannerSection = () => {
  return (
    <section>
      <section className="mt-[5rem] flex justify-center items-center">
        <div className="flex max-h-[49rem]">
          <div>
            <Image
              src={"/bgimage/sidebg/leftbg.svg"}
              width={150}
              height={500}
              alt="left background image"
            />
          </div>
          <div>
            <Image
              src={"/bgimage/bg1.jpg"}
              width={1300}
              height={800}
              alt="Background Image One"
            />
            <div className="max-w-[30rem] relative left-[6rem] bottom-[10rem]">
              <h4 className="text-4xl font-bold font-Playfair">
                Gives value to your feet
              </h4>
              <div className="relative left-[7rem]">
                <button className="p-4 bg-[#4B0082] font-Playfair text-white rounded-2xl mt-2 ">
                  Shop Now!
                </button>
              </div>
            </div>
          </div>

          <div className="relative top-[19rem]">
            <Image
              src={"/bgimage/sidebg/rightbg.svg"}
              width={150}
              height={500}
              alt="right background image"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div>
          <Image
            src={"/bgimage/bg2.jpg"}
            width={1600}
            height={800}
            alt="Background Image Two"
          />
          <div className="max-w-[27rem] relative left-[60rem] bottom-[15rem]">
            <h4 className="text-4xl font-bold text-white font-Playfair">
              Elevate your Performance
            </h4>
            <div className="relative left-[7rem]">
              <button className="p-4 bg-[#4B0082] font-Playfair text-white rounded-2xl mt-2 ">
                Shop Now!
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BannerSection;
