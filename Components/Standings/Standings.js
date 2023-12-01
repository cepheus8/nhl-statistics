import { useEffect, useState } from "react";
import classes from "./Standings.module.css";
import Table from "./Table";
import { getStandings } from "../../lib/utility";

const Standings = () => {
  const [standingsData, setStandingsData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getStandings();
      setStandingsData(data);
    })();
  }, []);

  if (standingsData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className={classes.standingsSection}>
      <Table standingsData={standingsData} />
    </section>
  );
};

export default Standings;
