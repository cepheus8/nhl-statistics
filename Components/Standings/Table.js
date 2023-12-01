import TableData from "./TableData";

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Team</th>
          <th>GamesPlayed</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>OTLosses</th>
          <th>Points</th>
          <th>GoalsFor</th>
          <th>GoalsAgainst</th>
          <th>goalDifferential</th>
        </tr>
      </thead>
      <tbody>
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
