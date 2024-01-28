import classes from "./SearchPlayers.module.css";
import StatsLeaders from "./StatsLeaders";

const SearchPlayers = (props) => {
  return (
    <section className={classes.playersSection}>
      <div className={classes.searchContainer}>
        <input
          className={classes.input}
          type="text"
          placeholder="Search players"
        />
      </div>
      <div className={classes.leadersContainer}>
        <h1 className={classes.leadersTitle}>League Leaders</h1>
        <StatsLeaders leadersData={props.leadersData} />
      </div>
    </section>
  );
};

export default SearchPlayers;
