import HerosectionLeft from "../hero/HerosectionLeft";
import HerosectionRight from "../hero/HerosectionRight";
import NavbarLeft from "../navbar/NavbarLeft";
import NavbarRigth from "../navbar/NavbarRigth";

const Layout = () => {
  return (
    <main className="flex h-screen ">
      <div className="w-[84rem] h-full ">
        <NavbarLeft />
        <HerosectionLeft />
      </div>
      <div className="bg-[#84BFE1] w-[36rem] h-full  ">
        <NavbarRigth />
        <HerosectionRight />
      </div>
    </main>
  );
};

export default Layout;
