import { Fragment } from "react";
import Hero from "../../Components/HomePage/Hero";
import Head from "next/head";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />
    </Fragment>
  );
};

export default HomePage;
