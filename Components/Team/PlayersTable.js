import classes from "./PlayersTable.module.css";

const PlayersTable = () => {
  return (
    <table className={classes.tableRoster}>
      <thead>
        <tr>
          <th>Player</th>
          <th>#</th>
          <th>Position</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Born</th>
          <th>Birthplace</th>
        </tr>
      </thead>
    </table>
  );
};

export default PlayersTable;
