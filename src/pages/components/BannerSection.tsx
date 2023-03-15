import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="lg:w-[100rem] sm:w-[100rem] 2xl:w-[120rem]">
      <section className="mt-[5rem] flex justify-center items-center sm:min-h-[63.3rem] lg:min-h-0 lg:max-h-[53.25rem] ">
        <div className="flex max-h-[49rem] sm:min-h-[63.3rem] lg:min-h-0 2xl:min-h-[64.8rem]">
          <div>
            <Image
              src={"/bgimage/sidebg/leftbg.svg"}
              width={150}
              height={500}
              alt="left background image"
              className="sm:hidden lg:block"
            />
          </div>
          <div>
            <Image
              src={"/bgimage/bg1.jpg"}
              width={1300}
              height={800}
              alt="Background Image One"
              className="sm:w-[100rem]"
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

          <div className="relative lg:top-[27.3rem] sm:hidden lg:block lg:max-h-[26.2rem] 2xl:top-[32.5rem]">
            <Image
              src={"/bgimage/sidebg/rightbg.svg"}
              width={150}
              height={500}
              alt="right background image"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center relative lg:max-h-[71.1rem] lg:top-[4.3rem] sm:max-h-[66.9rem] 2xl:max-h-[84.5rem]">
        <div>
          <Image
            src={"/bgimage/bg2.jpg"}
            width={1600}
            height={800}
            alt="Background Image Two"
            className="2xl:min-w-[120rem]"
          />
          <div className="max-w-[27rem] relative left-[60rem] bottom-[15rem] lg:left-[70rem] lg:bottom-[13rem]">
            <h4 className="text-4xl font-bold text-white font-Playfair">
              Elevate your Performance
            </h4>
            <div className="flex justify-center">
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
