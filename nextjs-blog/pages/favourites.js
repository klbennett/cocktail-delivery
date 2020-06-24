import React, { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import CocktailsList from "../components/CocktailsList";
import Router from "next/router";
import mockData from "../mockData.json";
import { getFavourites } from "../lib/actions";

const Favourites = ({ data }) => {
  if (data.drinks)
    return (
      <>
        <h4>Your favourite cocktails</h4>
        {JSON.stringify(data)}
        <CocktailsList data={data} />
      </>
    );

  return <p>no favs</p>;
};

Favourites.getInitialProps = async (ctx) => {
  let res;
  try {
    res = await getFavourites();
    console.log(res);
  } catch (err) {
    console.error(err);
  }
  return { data: { drinks: res } };
};

export default Favourites;
