import Standings from "../../../Components/Standings/Standings";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getStandings } from "../../../lib/utility";

const DivisionStandingsPage = () => {
  const [standingsData, setStandingsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname.split("/");
    (async () => {
      const data = await getStandings(path[2]);
      setStandingsData(data);
    })();
  }, []);

  return <Standings standingsData={standingsData}/>;
};

export default DivisionStandingsPage;
