import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="z-0 w-full">
      <div className="z-0 fixed top-0 left-0 h-full bg-white w-[60%]"></div>
      {children}
      <div className="z-0 fixed top-0 right-0 h-full bg-[#84BFE1] w-[40%]"></div>
    </div>
  );
};

export default Layout;
