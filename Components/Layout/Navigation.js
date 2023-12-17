import Link from "next/link";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={classes.navList}>
      <li>
        <Link href="/" className={classes.navLink}>
          Players
        </Link>
      </li>
      <li>
        <Link href="/teams" className={classes.navLink}>
          Teams
        </Link>
      </li>
      <li>
        <Link href="/standings/league" className={classes.navLink}>
          Standings
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
