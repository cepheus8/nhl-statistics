import classes from "./Standings.module.css";
import Table from "./Table";
import Link from "next/link";
import { useRouter } from "next/router";

const Standings = (props) => {
  const router = useRouter();
  const path = router.pathname.split("/")[2];

  if (props.standingsData.length === 0) {
    return (
      <section className={classes.standingsSection}>
        <p>Loading...</p>
      </section>
    );
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
            <h1 className={classes.standingsTitle}>
              {props.standingsData.eastConference[0].conferenceName}
            </h1>
            <Table standingsData={props.standingsData.eastConference} />
          </div>
          <div>
            <h1 className={classes.standingsTitle}>
              {props.standingsData.westConference[0].conferenceName}
            </h1>
            <Table standingsData={props.standingsData.westConference} />
          </div>
        </div>
      )}
      {path === "division" && (
        <div>
          <div>
            <h1 className={classes.standingsTitle}>
              {props.standingsData.atlantic[0].divisionName}
            </h1>
            <Table standingsData={props.standingsData.atlantic} />
          </div>
          <div>
            <h1 className={classes.standingsTitle}>
              {props.standingsData.metropolitan[0].divisionName}
            </h1>
            <Table standingsData={props.standingsData.metropolitan} />
          </div>
          <div>
            <h1 className={classes.standingsTitle}>
              {props.standingsData.central[0].divisionName}
            </h1>
            <Table standingsData={props.standingsData.central} />
          </div>
          <div>
            <h1 className={classes.standingsTitle}>
              {props.standingsData.pacific[0].divisionName}
            </h1>
            <Table standingsData={props.standingsData.pacific} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Standings;
