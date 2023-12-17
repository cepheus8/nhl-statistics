import TeamsList from "../../../Components/Teams/TeamsList";
import { useEffect, useState } from "react";
import { getTeamsData } from "../../../lib/utility";

const TeamsHomePage = () => {
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => {
    (async () => {
      const teamsLogosArray = await getTeamsData();
      setTeamsData(teamsLogosArray);
    })();
  }, []);

  return <TeamsList teamsData={teamsData} />;
};

export default TeamsHomePage;
