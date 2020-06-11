import React from "react";
import Card from "../components/Card";

export default function CocktailsList({ drinks }) {
  return (
    <div className="row">
      {drinks.drinks &&
        drinks.drinks.map(
          ({ strDrinkThumb, strDrink, strIBA, strAlcoholic }) => (
            <Card
              strDrinkThumb={strDrinkThumb}
              strDrink={strDrink}
              strIBA={strIBA}
              strAlcoholic={strAlcoholic}
            />
          )
        )}
    </div>
  );
}
