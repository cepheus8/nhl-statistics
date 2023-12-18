import classes from "./PlayersTable.module.css";
import PlayersTableData from "./PlayersTableData";

const PlayersTable = (props) => {
  return (
    <table className={classes.tableRoster}>
      <thead className={classes.headRoster}>
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
      <tbody>
        {props.rosterData.map((data) => {
          return (
            <PlayersTableData
              key={data.id}
              photo={data.headshot}
              playerFirstName={data.firstName.default}
              playerLastName={data.lastName.default}
              number={data.sweaterNumber}
              position={data.positionCode}
              height={data.heightInCentimeters}
              weight={data.weightInKilograms}
              born={data.birthDate}
              birthcity={data.birthCity.default}
              birthStateProvince={data?.birthStateProvince?.default}
              birthCountry={data.birthCountry}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default PlayersTable;
