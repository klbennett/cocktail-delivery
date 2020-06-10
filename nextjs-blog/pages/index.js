import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getCocktailData } from "../lib/API";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allCocktailsData = await getCocktailData();
  return {
    props: {
      allCocktailsData,
    },
  };
}

export default function Home({ allCocktailsData }) {
  return (
    <Layout home>
      <Head>…</Head>
      <div class="pure-g">
        {allCocktailsData.drinks.map(({ strDrink, strIBA, strAlcoholic }) => (
          <div className="pure-u-1 pure-u-md-1-3">
            <div className={strDrink}>
              <img src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" />
              {strDrink}
              <br />
              {strIBA}
              <br />
              {strAlcoholic}
            </div>

            <button class="pure-button">Add to Cart</button>
          </div>
        ))}
      </div>
      }
      {/* <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}
// export default function Home({ allPostsData }) {
//   return (
//     <Layout home>
//       <Head>…</Head>
//       <section className={utilStyles.headingMd}>…</section>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               {title}
//               <br />
//               {id}
//               <br />
//               {date}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }
