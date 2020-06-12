import React from "react";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import { getCocktailData } from "../lib/API";
import fetcher from "../lib/fetcher";
import CocktailsList from "../components/CocktailsList";
import { useRouter } from "next/router";
import mockData from "../mockData.json";

// async function fetcher(url) {
//   const res = await fetch(url);
//   const json = await res.json();
//   return json;
// }

function Results() {
  const router = useRouter();
  const { data, error } = useSWR(
    () =>
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${router.query.keyword}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const { drinks } = data;

  return (
    <div>
      <p>Country Code: {JSON.stringify(drinks[0])}</p>
      <CocktailsList drinks={data} />
    </div>
  );
}

export default Results;
