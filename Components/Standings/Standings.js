import { useEffect, useState } from "react";
import classes from "./Standings.module.css";
import Table from "./Table";

const Standings = () => {
  useEffect(() => {
    fetch(`https://api-web.nhle.com/v1/standings/now`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <section className={classes.standingsSection}>
      <Table />
    </section>
  );
};

export default Standings;
