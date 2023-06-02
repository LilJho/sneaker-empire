import React, { useState, useEffect } from "react";
import { BiDownArrow } from "react-icons/bi";
import Image from "next/image";
import FilaShoes from "../../../dummydata/FilaData.json";
import NewBalanceShoes from "../../../dummydata/NewBalance.json";
import { useRouter } from "next/router";
import Layout from "../components/layout/Layout";
import Navbar from "../components/navbar/Navbar";
import Modal from "../components/cart/Modal";
import LoginPage from "../components/user/LoginPage";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../components/cart/cartSlice";

interface shoesProps {
  id: string;
  name: string;
  price: number;
  images: string;
  trending: boolean;
  unisex: boolean;
  color: string;
  gender: string;
}

const index = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [shoesData, setShoesData] = useState<shoesProps[]>();

  const router = useRouter();
  const { data } = router.query;

  const allshoes: shoesProps[] = [...FilaShoes, ...NewBalanceShoes];
  allshoes.sort((a, b) => a.name.localeCompare(b.name));

  const getData = (data: string | string[]) => {
    switch (data) {
      case "allProducts":
        setShoesData(allshoes);
        break;
      case "filaSneakers":
        setShoesData(FilaShoes);
        break;
      case "worldBalance":
        setShoesData(NewBalanceShoes);
        break;
      default:
        setShoesData([]);
        break;
    }
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    getData(data);
  }, [data]);

  if (!shoesData) {
    return <h1>Loading</h1>;
  }
  return (
    <Layout>
      <Navbar setOpenLogin={setOpenLogin} openLogin={openLogin} />
      <main className="relative z-10">
        <section className="flex flex-col items-center justify-center w-full p-4 mt-2">
          <div className="flex items-center justify-between gap-[34rem] font-Playfair">
            <h2 className="text-2xl ">Nike Shoes</h2>
            <div className="flex items-center gap-1">
              <p>Sort By</p>
              <BiDownArrow />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 bg-gray-200 border-2 border-gray-500 rounded-lg">
            {shoesData.map((shoeData) => (
              <Post shoeData={shoeData} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      {openLogin && (
        <Modal isOpen={openLogin} closeModal={() => setOpenLogin(false)}>
          <LoginPage />
        </Modal>
      )}
    </Layout>
  );
};

interface shoeDataProp {
  shoeData: shoesProps;
}

const Post = ({ shoeData }: shoeDataProp) => {
  const cart = useSelector((state: shoeDataProp[]) => state);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <figure className="p-4" key={shoeData.id}>
      <Image
        src={shoeData.images}
        width={300}
        height={300}
        alt="A shoe in the items list"
        className="w-[300px] h-[300px] object-cover"
      />

      <figcaption className="text-left">
        <h4 className="text-base font-Playfair">{shoeData.name}</h4>
        <p className="text-sm text-gray-500 font-WorkSans">
          color: {shoeData.color}
        </p>
        <p className="text-sm text-gray-500 font-WorkSans">
          Gender: {shoeData.gender}
        </p>
        <p className="text-sm font-Playfair">Price: {shoeData.price}</p>
      </figcaption>

      <button
        onClick={() => dispatch(addToCart(shoeData))}
        className="float-right px-2 py-1 mt-2 text-sm text-white bg-blue-700 rounded-md"
      >
        Add to Cart
      </button>
    </figure>
  );
};

export default index;
