import { Fragment } from "react";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import Head from "next/head";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link
              href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap"
              rel="stylesheet"
            ></link>
          </link>
        </link>
      </Head>
      <main>
        <Header />
        <Hero />
      </main>
    </Fragment>
  );
};

export default HomePage;
