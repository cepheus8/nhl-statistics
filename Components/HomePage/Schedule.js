import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import classes from "./Schedule.module.css";

const Schedule = () => {
  const [gamesData, setGamesData] = useState([]);
  const date = new Date().toLocaleString("en-CA").split(",");
  const formatedDate = date[0];

  useEffect(() => {
    fetch(`https://api-web.nhle.com/v1/schedule/${formatedDate}`)
      .then((res) => res.json())
      .then((data) => {
        const todayGamesData = data.gameWeek[0].games;
        console.log(todayGamesData);
        setGamesData(todayGamesData);
      });
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
