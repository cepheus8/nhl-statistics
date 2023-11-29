import "@/styles/globals.css";
import Layout from "../../Components/HomePage/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
