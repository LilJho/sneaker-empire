import BannerSection from "./BannerSection";
import Layout from "./layout/Layout";
import PopularSection from "./PopularSection";

const MainLayout = () => {
  return (
    <>
      <Layout />
      <PopularSection />
      <BannerSection />
    </>
  );
};

export default MainLayout;
