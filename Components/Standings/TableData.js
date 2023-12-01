import Image from "next/image";

const TableData = (props) => {
  return (
    <tr>
      <td>{props.rank}</td>
      <td>
        <Image src={props.logo} height={50} width={50} />
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
