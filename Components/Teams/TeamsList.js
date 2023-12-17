import classes from "./TeamsList.module.css";
import TeamCard from "./TeamCard";

const TeamsList = (props) => {
  return (
    <section className={classes.teamsSection}>
      <div className={classes.cardContainer}>
        {props.teamsData.map((team) => {
          return (
            <TeamCard
              logo={team.logo}
              key={team.id}
              name={team.name.default}
              query={team.abbrev}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TeamsList;
