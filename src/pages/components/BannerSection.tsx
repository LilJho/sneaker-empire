import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="lg:relative">
      <section className=" flex justify-center items-center lg:relative lg:top-[9rem]">
        <div className="flex ">
          <div>
            <Image
              src={"/bgimage/bg1.jpg"}
              width={2000}
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
      <section className="flex justify-center">
        <div>
          <Image
            src={"/bgimage/bg2.jpg"}
            width={2000}
            height={800}
            alt="Background Image Two"
          />
          <div className="max-w-[27rem] absolute left-[2rem] bottom-[2rem] hidden lg:block">
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
