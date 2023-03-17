import Image from "next/image";

const BannerSection = () => {
  return (
    <section className=" w-[100rem] lg:w-[120rem] ">
      <section className="mt-[5rem] flex justify-center items-center min-h-[63.3rem] lg:min-h-0 lg:max-h-[53.25rem] ">
        <div className="flex max-h-[49rem] min-h-[63.3rem] lg:min-h-0  lg:max-h-[84.38rem]">
          <div>
            <Image
              src={"/bgimage/sidebg/leftbg.svg"}
              width={150}
              height={500}
              alt="left background image"
              className="hidden lg:block"
            />
          </div>
          <div>
            <Image
              src={"/bgimage/bg1.jpg"}
              width={1300}
              height={800}
              alt="Background Image One"
              className="w-[100rem] lg:w-[120rem]"
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

          <div className="relative lg:top-[45.2rem] hidden lg:block lg:max-h-[26.2rem]">
            <Image
              src={"/bgimage/sidebg/rightbg.svg"}
              width={150}
              height={500}
              alt="right background image"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center relative lg:max-h-[84rem] lg:top-[4.3rem] max-h-[66.9rem] ">
        <div>
          <Image
            src={"/bgimage/bg2.jpg"}
            width={1600}
            height={800}
            alt="Background Image Two"
            className="w-[100rem] lg:w-[120rem] "
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
