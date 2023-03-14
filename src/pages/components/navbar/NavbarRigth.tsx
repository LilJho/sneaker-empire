import { GoSearch } from "react-icons/go";
import { GrCart } from "react-icons/gr";

const NavbarRigth = () => {
  return (
    <nav className="p-4">
      <div className="text-2xl flex justify-between cursor-pointer w-full">
        <div className="flex gap-[5rem]">
          <button>
            <GoSearch />
          </button>
          <button>
            <GrCart />
          </button>
        </div>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default NavbarRigth;
