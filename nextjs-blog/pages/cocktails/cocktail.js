import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Cocktail() {
  return (
    <Layout>
      <Head>
        <title>Cocktail</title>
      </Head>
      <h1>Cocktail details</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
