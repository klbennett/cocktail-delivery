import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Drinks To You";

export default function Layout({ children, home }) {
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
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@2.0.3/build/pure-min.css"
          integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@2.0.3/build/grids-responsive-min.css"
        />
        <meta
          name="description"
          content="Cocktail delivery service using Next.js"
        />
      </Head>
      <div className="pure-menu pure-menu-horizontal">
        <a href="#" className="pure-menu-heading pure-menu-link">
          {siteTitle}
        </a>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              Drinks
            </a>
          </li>
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              Cart
            </a>
          </li>
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              My Account
            </a>
          </li>
        </ul>
      </div>
      <main>{children}</main>
    </>
  );
}

// export default function Layout({ children, home }) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <link rel="icon" href="/favicon.ico" />
//         <meta
//           name="description"
//           content="Learn how to build a personal website using Next.js"
//         />
//         <meta
//           property="og:image"
//           content={`https://og-image.now.sh/${encodeURI(
//             siteTitle
//           )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
//         />
//         <meta name="og:title" content={siteTitle} />
//         <meta name="twitter:card" content="summary_large_image" />
//       </Head>
//       <header className={styles.header}>
//         {home ? (
//           <>
//             <img
//               src="/images/profile.jpg"
//               className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
//               alt={name}
//             />
//             <h1 className={utilStyles.heading2Xl}>{name}</h1>
//           </>
//         ) : (
//           <>
//             <Link href="/">
//               <a>
//                 <img
//                   src="/images/profile.jpg"
//                   className={`${styles.headerImage} ${utilStyles.borderCircle}`}
//                   alt={name}
//                 />
//               </a>
//             </Link>
//             <h2 className={utilStyles.headingLg}>
//               <Link href="/">
//                 <a className={utilStyles.colorInherit}>{name}</a>
//               </Link>
//             </h2>
//           </>
//         )}
//       </header>
//       <main>{children}</main>
//       {!home && (
//         <div className={styles.backToHome}>
//           <Link href="/">
//             <a>← Back to home</a>
//           </Link>
//         </div>
//       )}
//     </div>
//   )
// }
