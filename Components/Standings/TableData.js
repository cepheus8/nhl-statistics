import Image from "next/image";
import classes from "./TableData.module.css";

const TableData = (props) => {
  return (
    <tr className={classes.row}>
      <td>{props.rank + 1}</td>
      <td className={classes.nameData}>
        <Image src={props.logo} height={50} width={50} alt={props.teamName} />
        {props.teamName}
      </td>
      <td>{props.games}</td>
      <td>{props.wins}</td>
      <td>{props.losses}</td>
      <td>{props.otLosses}</td>
      <td>{props.points}</td>
      <td>{props.goalFor}</td>
      <td>{props.goalAgainst}</td>
      <td>{props.goalDifferential}</td>
    </tr>
  );
};

export default TableData;
