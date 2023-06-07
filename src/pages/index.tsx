import BannerSection from "../components/BannerSection";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import PopularSection from "../components/PopularSection";
import Layout from "../components/layout/Layout";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import LoginPage from "../components/user/LoginPage";
import Modal from "../components/cart/Modal";

export default function Home() {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <Layout>
      <Navbar setOpenLogin={setOpenLogin} openLogin={openLogin} />
      <Herosection />
      <PopularSection />
      <BannerSection />
      <Footer />
      {openLogin && (
        <Modal isOpen={openLogin} closeModal={() => setOpenLogin(false)}>
          <LoginPage />
        </Modal>
      )}
    </Layout>
  );
}
