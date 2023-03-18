import HerosectionLeft from "../hero/HerosectionLeft";
import HerosectionRight from "../hero/HerosectionRight";
import NavbarLeft from "../navbar/NavbarLeft";
import NavbarRigth from "../navbar/NavbarRigth";

const Layout = () => {
  return (
    <main className="w-full h-full lg:flex ">
      <div className="lg:w-[70%] lg:h-[54rem] w-full">
        <NavbarLeft />
        <HerosectionLeft />
      </div>
      <div className="bg-[#84BFE1] w-[30%] h-[54rem] hidden lg:block">
        <NavbarRigth />
        <HerosectionRight />
      </div>
    </main>
  );
};

export default Layout;
