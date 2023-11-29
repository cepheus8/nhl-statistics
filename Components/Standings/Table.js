import TableData from "./TableData";

const Table = () => {
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
        <TableData />
      </tbody>
    </table>
  );
};

export default Table;
