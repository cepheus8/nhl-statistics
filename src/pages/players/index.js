import SearchPlayers from "../../../Components/Players/SearchPlayers";
import { useEffect, useState } from "react";
import { getLeaders } from "../../../lib/utility";

const PlayersHomePage = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getLeaders();
      setLeaders(data.points);
    })();
  }, []);

  return <SearchPlayers leadersData={leaders} />;
};

export default PlayersHomePage;
