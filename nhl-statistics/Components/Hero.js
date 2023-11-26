import classes from "./Hero.module.css";
import Image from "next/image";
import Schedule from "./Schedule";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.heroContainer}>
        <h1>Welcome to NHL statistics! </h1>
        <div className={classes.heroDescription}>
          <p>Browse players...</p>
          <Image src="/ice-hockey-player.png" width={70} height={70} />
        </div>
        <div className={classes.heroDescription}>
          <p>Teams...</p>
          <Image src="/team.png" width={70} height={70} />
        </div>
        <div className={classes.heroDescription}>
          <p>or follow matches live!</p>
          <Image src="/live.png" width={70} height={70} />
        </div>
      </div>
      <Schedule />
    </section>
  );
};

export default Hero;
