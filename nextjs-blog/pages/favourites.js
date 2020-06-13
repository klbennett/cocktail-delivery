import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import CocktailsList from "../components/CocktailsList";
import { useRouter } from "next/router";
import mockData from "../mockData.json";

function Favourites() {
  const router = useRouter();
  //   const { data, error } = useSWR(
  //     () =>
  //       `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${router.query.keyword}`,
  //     fetcher
  //   );

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    );

  return <CocktailsList drinks={mockData} />;
}

export default Favourites;
