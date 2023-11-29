import { useEffect, useState } from "react";
import { getSchedule } from "../../lib/utility";
import GameCard from "./GameCard";
import classes from "./Schedule.module.css";

const Schedule = () => {
  const [gamesData, setGamesData] = useState([]);
  const date = new Date().toLocaleString("en-CA").split(",");
  const formatedDate = date[0];

  useEffect(() => {
    (async () => {
      const data = await getSchedule(formatedDate);
      setGamesData(data);
    })();
  }, []);

  if (gamesData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <aside className={classes.scheduleAside}>
      <p className={classes.time}>{formatedDate} Today's Games</p>
      <div className={classes.schedule}>
        {gamesData.map((data) => {
          return (
            <GameCard
              key={data.id}
              homeTeam={data.homeTeam.abbrev}
              awayTeam={data.awayTeam.abbrev}
              homeTeamLogo={data.homeTeam.logo}
              awayTeamLogo={data.awayTeam.logo}
              time={data.startTimeUTC}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default Schedule;
