import React, { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Link from "next/link";

import CocktailsList from "../components/CocktailsList";
import Router from "next/router";
import mockData from "../mockData.json";
import { getFavourites } from "../lib/actions";
import { useUser } from "../utils/auth/useUser";

const Favourites = ({ data }) => {
  const { user } = useUser();

  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in.{" "}
          <Link href={"/auth"}>
            <a>Sign in</a>
          </Link>
        </p>
      </>
    );
  }

  return (
    <>
      <h4>Your favourite cocktails</h4>
      {data.drinks ? (
        <CocktailsList data={data} />
      ) : (
        <p>You haven't saved any favourites yet! </p>
      )}
    </>
  );
};

Favourites.getInitialProps = async () => {
  try {
    const res = await getFavourites();
    return { data: { drinks: res } };
  } catch (err) {
    console.error(err);
  }
};

export default Favourites;
