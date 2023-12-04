import Standings from "../../../Components/Standings/Standings";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getStandings } from "../../../lib/utility";

const init = {
  eastConference: [],
  westConference: [],
};

const ConferenceStandingsPage = () => {
  const [standingsData, setStandingsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname.split("/");
    (async () => {
      const data = await getStandings(path[2]);
      setStandingsData(data);
      console.log(data);
    })();
  }, []);

  return <Standings standingsData={standingsData} />;
};

export default ConferenceStandingsPage;
