import classes from "./GameCard.module.css";
import Image from "next/image";
import { GoDash } from "react-icons/go";

const GameCard = (props) => {
  const date = new Date(props.time);
  const hour = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return (
    <div className={classes.card}>
      <span className={classes.time}>
        {hour}:{minutes} PM
      </span>
      <div>
        <p>{props.homeTeam}</p>
        <Image
          src={props.homeTeamLogo}
          width={40}
          height={40}
          alt="Home team logo"
        />
      </div>
      <GoDash />
      <div>
        <p>{props.awayTeam}</p>
        <Image
          src={props.awayTeamLogo}
          width={40}
          height={40}
          alt="Away team logo"
        />
      </div>
    </div>
  );
};

export default GameCard;
