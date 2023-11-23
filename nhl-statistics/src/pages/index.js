import { Fragment } from "react";
import Hero from "../../Components/Hero";
import Head from "next/head";
import Schedule from "../../Components/Schedule";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />
      <Schedule />
    </Fragment>
  );
};

export default HomePage;
