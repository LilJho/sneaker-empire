import { GoSearch } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { useState } from "react";
import CartModal from "../cart/CartModal";

const NavbarRigth = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <nav className="p-4">
      <div className="flex justify-between w-full text-2xl cursor-pointer">
        <div className="flex gap-[5rem]">
          <button>
            <GoSearch />
          </button>
          <button className="cursor-pointer" onClick={openModal}>
            <GrCart />
          </button>
        </div>
        <button className="font-Playfair">Login</button>
      </div>
      <CartModal
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
    </nav>
  );
};

export default NavbarRigth;
