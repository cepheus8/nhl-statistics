import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.heroContainer}>
        <div className={classes.heroDescription}>
          <h1>Welcome to NHL statistics! </h1>
          <p>This page is only for stats nerds and passionate hockey fans</p>
        </div>
        <Image src="/players.jpg" width={400} height={400} />
      </div>
    </section>
  );
};

export default Hero;
