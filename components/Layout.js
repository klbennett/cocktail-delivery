import Head from "next/head";
import Link from "next/link";
import { useUser } from "../utils/auth/useUser";

export const siteTitle = "Drinks To You";

const Layout = ({ children, home }) => {
  const { user, logout } = useUser();

  return (
    <>
      <Head>
        <title>Drinks To You</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Cocktail delivery service using Next.js"
        />
      </Head>
      <header>
        <nav>
          <div className="nav-wrapper">
            <Link href={"/"}>
              <a href="/" className="brand-logo">
                {siteTitle}
              </a>
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link href={"/"}>
                  <a>Find Drinks</a>
                </Link>
              </li>
              <li>
                <Link href={"/favourites"}>
                  <a>Favourites</a>
                </Link>
              </li>

              <li>
                {" "}
                <Link href={"/profile"}>
                  <a>Profile</a>
                </Link>
              </li>

              <li>
                {" "}
                <Link href={"/auth"}>
                  <a>Sign in</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text"></h5>
              <p className="grey-text text-lighten-4">
                I created this website to practice my knowledge of Next.js and
                Firebase hosting and Auth.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Built with</h5>
              <ul>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.thecocktaildb.com/"
                  >
                    TheCocktailDB
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://nextjs.org/"
                  >
                    Next.js
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://reactjs.org/"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://materializecss.com/"
                  >
                    Materialize
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://firebase.google.com/"
                  >
                    Firebase
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© Kay Bennett 2020</div>
        </div>
      </footer>
      <style global jsx>
        {`
          body {
            display: flex;
            flex-direction: column;
          }

          .main {
            padding-top: 2em;
            flex: 1 0 auto;
            min-height: 80vh;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
