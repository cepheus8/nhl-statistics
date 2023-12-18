import { useEffect, useState } from "react";
import PlayersTable from "./PlayersTable";
import classes from "./TeamRoster.module.css";
import Image from "next/image";
import { getTeamsData } from "../../lib/utility";

const TeamRoster = ({ rosterData, abbrev }) => {
  const [logo, setLogo] = useState("");
  console.log(rosterData);

  useEffect(() => {
    if (!abbrev) return;
    (async () => {
      const teamsData = await getTeamsData();
      const filteredData = teamsData.filter((data) => {
        return data.abbrev === abbrev;
      });
      const [teamData] = filteredData;
      setLogo(teamData.logo);
    })();
  }, [abbrev]);

  if (!rosterData) {
    return (
      <section className={classes.standingsSection}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section
      className={classes.teamSection}
      style={{ backgroundColor: `var(--${abbrev})` }}
    >
      {logo && (
        <div>
          <Image
            src={logo}
            height={520}
            width={520}
            alt="logo"
            className={classes.backgroundImage}
            priority
          />
          <h1>Roster</h1>
          <PlayersTable rosterData={rosterData.forwards} />
        </div>
      )}
    </section>
  );
};

export default TeamRoster;
