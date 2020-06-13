import Head from "next/head";
import Link from "next/link";
import { get } from "lodash/object";
import withAuthUser from "../utils/pageWrappers/withAuthUser";
import withAuthUserInfo from "../utils/pageWrappers/withAuthUserInfo";

export const siteTitle = "Drinks To You";

const Layout = ({ children, home }) => {
  // const AuthUser = get(AuthUserInfo, "AuthUser", null);
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
                <a href="#">Favourites</a>
              </li>
              <li>
                {" "}
                <Link href={"/profile"}>
                  <a>Sign in</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text"></h5>
              <p class="grey-text text-lighten-4">
                I created this website to practice my knowledge of Next.js and
                Firebase hosting and Auth.
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Built with</h5>
              <ul>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://www.thecocktaildb.com/"
                  >
                    TheCocktailDB
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://nextjs.org/"
                  >
                    Next.js
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://reactjs.org/"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://materializecss.com/"
                  >
                    Materialize
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://firebase.google.com/"
                  >
                    Firebase
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">© Kay Bennett 2020</div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
