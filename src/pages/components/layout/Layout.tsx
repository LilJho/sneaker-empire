import HerosectionLeft from "../hero/HerosectionLeft";
import HerosectionRight from "../hero/HerosectionRight";
import NavbarLeft from "../navbar/NavbarLeft";
import NavbarRigth from "../navbar/NavbarRigth";

const Layout = () => {
  return (
    <main className="lg:flex lg:h-[59rem] lg:w-[120rem] w-[100rem] ">
      <div className="lg:w-[70%] lg:h-full w-[100rem]">
        <NavbarLeft />
        <HerosectionLeft />
      </div>
      <div className="bg-[#84BFE1] lg:w-[30%] h-full hidden lg:block">
        <NavbarRigth />
        <HerosectionRight />
      </div>
    </main>
  );
};

export default Layout;
