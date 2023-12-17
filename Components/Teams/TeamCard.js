import classes from "./TeamCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const TeamCard = (props) => {
  return (
    <div className={classes.card}>
      <Link href={`teams/${props.query}`} className={classes.cardLink}>
        <Image
          src={props.logo}
          height={120}
          width={120}
          alt={`${props.name} logo`}
        />
        <div className={classes.nameContainer}>
          <h3 className={classes.cardTitle}>{props.name}</h3>
          <FaArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default TeamCard;
