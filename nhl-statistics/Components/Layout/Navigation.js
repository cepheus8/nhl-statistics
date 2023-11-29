import Link from "next/link";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={classes.navList}>
      <li>
        <Link href="./" className={classes.navLink}>
          Players
        </Link>
      </li>
      <li>
        <Link href="./" className={classes.navLink}>
          Teams
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
