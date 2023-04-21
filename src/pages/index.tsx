import BannerSection from "./components/BannerSection";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import PopularSection from "./components/PopularSection";
import Layout from "./components/layout/Layout";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Herosection />
      <PopularSection />
      <BannerSection />
      <Footer />
    </Layout>
  );
}
