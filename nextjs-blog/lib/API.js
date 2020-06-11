import fetch from "node-fetch";

export const API_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export async function getCocktailData(query = "negroni") {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  );
  const json = await res.json();
  console.log(json);
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json;
}
