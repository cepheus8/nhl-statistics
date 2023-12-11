import classes from "./TeamCard.module.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const TeamCard = (props) => {
  return (
    <div className={classes.card}>
      <Image src={props.logo} height={120} width={120} />
      <div className={classes.linkContainer}>
        <h3>{props.name}</h3>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default TeamCard;
