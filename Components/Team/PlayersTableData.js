import Image from "next/image";
import classes from "./PlayersTableData.module.css";

const PlayersTableData = (props) => {
  return (
    <tr className={classes.rowRoster}>
      <td className={classes.playerData}>
        <Image src={props.photo} height={50} width={50} alt="headshot" />
        {`${props.playerFirstName} ${props.playerLastName}`}
      </td>
      <td>{props.number}</td>
      <td>{props.position}</td>
      <td>{props.height}</td>
      <td>{props.weight}</td>
      <td>{props.born}</td>
      <td>
        {props.birthStateProvince
          ? `${props.birthcity}, ${props.birthStateProvince}, ${props.birthCountry}`
          : `${props.birthcity}, ${props.birthCountry}`}
      </td>
    </tr>
  );
};

export default PlayersTableData;
