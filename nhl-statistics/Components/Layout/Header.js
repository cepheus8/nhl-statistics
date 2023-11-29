import classes from "./Header.module.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.pageTitle}>NHL STATS</h1>
      <Navigation />
    </header>
  );
};

export default Header;
