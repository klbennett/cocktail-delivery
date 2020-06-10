import fetch from "node-fetch";

export async function getCocktailData(query, { variables } = {}) {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
  );
  const json = await res.json();
  console.log(json);
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json;
}
