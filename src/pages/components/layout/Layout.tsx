import HerosectionLeft from "../hero/HerosectionLeft";
import HerosectionRight from "../hero/HerosectionRight";
import NavbarLeft from "../navbar/NavbarLeft";
import NavbarRigth from "../navbar/NavbarRigth";

const Layout = () => {
  return (
    <main className=" h-screen flex">
      <div className="w-[70%] h-full">
        <NavbarLeft />
        <HerosectionLeft />
      </div>
      <div className="bg-[#84BFE1] w-[30%] h-full">
        <NavbarRigth />
        <HerosectionRight />
      </div>
    </main>
  );
};

export default Layout;
