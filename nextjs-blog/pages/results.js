import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import CocktailsList from "../components/CocktailsList";
import { useRouter } from "next/router";
import mockData from "../mockData.json";

function Results() {
  const router = useRouter();
  console.log(router.query.keyword);
  const { data, error } = useSWR(
    () =>
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${router.query.keyword}`,
    fetcher
  );

  if (error) return <div>Failed to load :( Please try again later. </div>;
  if (!data)
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );

  return <CocktailsList data={data} />;
}

export default Results;
