import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="w-full h-full">
      <section className="mt-[5rem] flex justify-center items-center ">
        <div className="flex lg:min-h-[41rem]">
          <div>
            <Image
              src={"/bgimage/bg1.jpg"}
              width={1300}
              height={800}
              alt="Background Image One"
            />
            <div className="max-w-[14rem] relative left-[2rem] bottom-[25rem] hidden lg:block">
              <h4 className="text-4xl font-bold font-Playfair">
                Gives value to your feet
              </h4>
              <div>
                <button className="p-4 bg-[#4B0082] font-Playfair text-white rounded-2xl mt-2 ">
                  Shop Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center lg:min-h-[24rem]">
        <div>
          <Image
            src={"/bgimage/bg2.jpg"}
            width={1300}
            height={800}
            alt="Background Image Two"
          />
          <div className="max-w-[27rem] relative left-[5rem] bottom-[15rem] hidden lg:block">
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
