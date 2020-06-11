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

      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            <Link href={"/"} className="pure-menu-link">
              {siteTitle}
            </Link>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link href={"/"} className="pure-menu-link">
                <a>Find Drinks</a>
              </Link>
            </li>
            <li>
              <a href="#">Favourites</a>
            </li>
            <li>
              {" "}
              <Link href={"/profile"} className="pure-menu-link">
                <a>Sign in</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
