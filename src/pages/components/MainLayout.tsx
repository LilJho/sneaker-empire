import BannerSection from "./BannerSection";
import Footer from "./Footer";
import Layout from "./layout/Layout";
import PopularSection from "./PopularSection";

const MainLayout = () => {
  return (
    <>
      <Layout />
      <PopularSection />
      <BannerSection />
      <Footer />
    </>
  );
};

export default MainLayout;
