import Image from "next/image";

const NavbarLeft = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-between p-4">
        <div>
          <Image
            src={"/logo.svg"}
            width={100}
            height={100}
            alt={"LOGO"}
            className="cursor-pointer"
          />
        </div>

        <ul className=" text-2xl flex gap-[4rem] cursor-pointer mr-[15rem]">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLeft;
