import TableData from "./TableData";
import classes from "./Table.module.css";

const Table = (props) => {
  console.log(props.standingsData);
  return (
    <table className={classes.table}>
      <thead className={classes.head}>
        <tr>
          <th>Rank</th>
          <th>Team</th>
          <th>GP</th>
          <th>W</th>
          <th>L</th>
          <th>OT</th>
          <th>PTS</th>
          <th>GF</th>
          <th>GA</th>
          <th>DIFF</th>
        </tr>
      </thead>
      <tbody className={classes.body}>
        {props.standingsData.map((data, i) => {
          return (
            <TableData
              rank={i}
              logo={data.teamLogo}
              teamName={data.teamName.default}
              games={data.gamesPlayed}
              wins={data.wins}
              losses={data.losses}
              otLosses={data.otLosses}
              points={data.points}
              goalFor={data.goalFor}
              goalAgainst={data.goalAgainst}
              goalDifferential={data.goalDifferential}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
