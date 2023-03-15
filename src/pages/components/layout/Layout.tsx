import HerosectionLeft from "../hero/HerosectionLeft";
import HerosectionRight from "../hero/HerosectionRight";
import NavbarLeft from "../navbar/NavbarLeft";
import NavbarRigth from "../navbar/NavbarRigth";

const Layout = () => {
  return (
    <main className="lg:flex lg:h-[59rem] w-[100rem] 2xl:w-[120rem] 2xl:h-[67.5rem]">
      <div className="lg:w-[70%] lg:h-full sm:w-[100rem]">
        <NavbarLeft />
        <HerosectionLeft />
      </div>
      <div className="bg-[#84BFE1] w-[30%] h-full sm:hidden lg:block">
        <NavbarRigth />
        <HerosectionRight />
      </div>
    </main>
  );
};

export default Layout;
