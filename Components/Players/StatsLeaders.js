import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./StatsLeaders.module.css";
import { getLeaders } from "../../lib/utility";

const StatsLeaders = (props) => {
  if (props.leadersData.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <table className={classes.leadersTable}>
      <thead className={classes.leadersHead}>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Points</th>
          <th>Position</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody className={classes.leadersBody}>
        {props.leadersData.map((data, i) => {
          return (
            <tr key={data.id} className={classes.leadersRow}>
              <td>{i + 1}</td>
              <td className={classes.leaderNameData}>
                <Image
                  src={data.headshot}
                  height={50}
                  width={50}
                  alt="headshot"
                />{" "}
                {`${data.firstName.default} ${data.lastName.default}`}
              </td>
              <td>{data.value}</td>
              <td>{data.position}</td>
              <td className={classes.leaderTeamData}>
                <Image
                  src={data.teamLogo}
                  height={50}
                  width={50}
                  alt="team logo"
                />
                {data.teamAbbrev}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StatsLeaders;
