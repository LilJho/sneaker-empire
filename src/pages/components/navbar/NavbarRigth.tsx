import { GoSearch } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { useState } from "react";
import Modal from "../cart/Modal";
import Cart from "../cart/Cart";
import LoginPage from "../user/LoginPage";

const NavbarRigth = () => {
  let [isOpenCart, setIsOpenCart] = useState(false);
  let [isOpenLogin, setIsOpenLogin] = useState(false);

  return (
    <nav className="p-4">
      <div className="flex justify-between w-full text-2xl cursor-pointer">
        <div className="flex gap-[5rem]">
          <button>
            <GoSearch />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => setIsOpenCart(true)}
          >
            <GrCart />
          </button>
        </div>
        <button
          className="cursor-pointer font-Playfair"
          onClick={() => setIsOpenLogin(true)}
        >
          Login
        </button>
      </div>
      <Modal isOpen={isOpenCart} closeModal={() => setIsOpenCart(false)}>
        <Cart closeModal={() => setIsOpenCart(false)} />
      </Modal>
      <Modal isOpen={isOpenLogin} closeModal={() => setIsOpenLogin(false)}>
        <LoginPage />
      </Modal>
    </nav>
  );
};

export default NavbarRigth;
