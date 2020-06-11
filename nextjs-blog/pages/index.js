import { useState } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import mockData from "../mockData.json";

export default function Home({ allCocktailsData }) {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  return (
    <>
      <Head>…</Head>

      <div className="hero col s12"></div>
      <div className="card-panel grey lighten-2 search">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="search"
              type="text"
              className="validate"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <label className="active" htmlFor="search">
              Search for a cocktail e.g. Negroni
            </label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={() =>
            Router.push({
              pathname: "/results",
              query: { keyword: searchValue },
            })
          }
        >
          Search
        </button>
      </div>
      <style global jsx>{`
        .hero {
          background: url("/images/hero.jpg") no-repeat 0% 0%;
          background-size: cover;
          height: 100vh;
        }
        .search {
          position: absolute;
          width: 40em;
          top: 50%;
          left: 50%;
        }
      `}</style>
    </>
  );
}
