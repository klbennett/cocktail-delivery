import React from "react";
import useSWR from "swr";
import { getCocktailData, API_URL } from "../lib/API";
import fetcher from "../lib/fetcher";
import CocktailsList from "../components/CocktailsList";
import { useRouter } from "next/router";
import mockData from "../mockData.json";

const Results = () => {
  const router = useRouter();
  // const results = getCocktailData(router.query.keyword);

  // console.log(results);

  return <CocktailsList drinks={mockData} />;
};

export default Results;
