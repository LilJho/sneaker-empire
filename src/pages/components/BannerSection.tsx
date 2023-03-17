import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="w-full ">
      <section className="mt-[5rem] flex justify-center items-center">
        <div className="flex ">
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

          <div className="relative hidden lg:top-0 lg:block">
            <Image
              src={"/bgimage/sidebg/rightbg.svg"}
              width={150}
              height={500}
              alt="right background image"
            />
          </div>
        </div>
      </section>
      <section className="relative flex justify-center w-full ">
        <div>
          <Image
            src={"/bgimage/bg2.jpg"}
            width={1600}
            height={800}
            alt="Background Image Two"
          />
          <div className="max-w-[27rem] relative left-[5rem] bottom-[15rem]">
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
