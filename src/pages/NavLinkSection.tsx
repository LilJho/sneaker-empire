import MenSection from "./components/MenSection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import filaData from "../../dummydata/FilaData.json";
import newBalanceData from "../../dummydata/NewBalance.json";

const NavLinkSection = () => {
  const [shoesData, setShoesData] = useState();

  const router = useRouter();
  const data = router.query.data;
  if (!data) {
    return <span>Loading</span>;
  }

  useEffect(() => {
    const allshoes = filaData.concat(newBalanceData);
    switch (data) {
      case "allProducts":
        setShoesData(allshoes);
        break;
      case "filaSneakers":
        setShoesData(filaData);
        break;
      case "worldBalance":
        setShoesData(newBalanceData);
        break;
      default:
        setShoesData([]);
        break;
    }
  }, [data]);

  return <MenSection shoesData={shoesData} />;
};

export default NavLinkSection;
