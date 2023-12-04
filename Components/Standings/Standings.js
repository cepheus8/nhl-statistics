import classes from "./Standings.module.css";
import Table from "./Table";
import Link from "next/link";
import { useRouter } from "next/router";

const Standings = (props) => {
  const router = useRouter();
  const path = router.pathname.split("/")[2];

  if (props.standingsData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className={classes.standingsSection}>
      <div className={classes.optionBar}>
        <Link className={classes.activeLink} href="./league">
          League
        </Link>
        <Link href="./conference">Conference</Link>
        <Link href="./division">Division</Link>
      </div>
      {path === "league" && (
        <div>
          <h1 className={classes.standingsTitle}>National Hockey League</h1>
          <Table standingsData={props.standingsData} />
        </div>
      )}
      {path === "conference" && (
        <div>
          <div>
            <h1 className={classes.standingsTitle}>Eastern</h1>
            <Table standingsData={props.standingsData.eastConference} />
          </div>
          <div>
            <h1 className={classes.standingsTitle}>Western</h1>
            <Table standingsData={props.standingsData.westConference} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Standings;
