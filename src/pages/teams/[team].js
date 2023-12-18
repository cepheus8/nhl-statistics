import TeamRoster from "../../../Components/Team/TeamRoster";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getRoster } from "../../../lib/utility";

const teamPage = () => {
  const [rosterData, setRosterData] = useState(undefined);
  const router = useRouter();
  const teamAbbrev = router.query.team;

  useEffect(() => {
    if (!router.isReady) return;
    (async () => {
      const roster = await getRoster(teamAbbrev);
      console.log(roster);
      setRosterData(roster);
    })();
  }, [router.isReady]);

  return <TeamRoster rosterData={rosterData} abbrev={teamAbbrev} />;
};

export default teamPage;
