import HerosectionLeft from "../hero/HerosectionLeft";
import HerosectionRight from "../hero/HerosectionRight";
import NavbarLeft from "../navbar/NavbarLeft";
import NavbarRigth from "../navbar/NavbarRigth";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 h-full bg-white w-[60%]"></div>
      {children}
      <div className="fixed top-0 right-0 h-full bg-[#84BFE1] w-[40%]"></div>
    </div>
  );
};

export default Layout;
