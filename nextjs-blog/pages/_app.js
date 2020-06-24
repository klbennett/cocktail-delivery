import "materialize-css/dist/css/materialize.min.css";
import Layout, { siteTitle } from "../components/Layout";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
