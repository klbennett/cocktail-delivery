import React, { useState } from "react";

export default function CocktailDetail({ selectedDrink, authUserInfo }) {
  const [favButtonCopy, toggleFavButtonCopy] = useState("Save to Favourites ♥");

  const {
    idDrink,
    strDrink,
    strDrinkThumb,
    strGlass,
    strIBA,
    strAlcoholic,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strInstructions,
  } = selectedDrink;
  return (
    <>
      <h4>{strDrink}</h4>
      <img src={strDrinkThumb} className="circle responsive-img" width="400" />
      <p>{strIBA}</p>
      <p>{strAlcoholic}</p>
      <ul>
        <li> {strIngredient1 && strIngredient1}</li>
        <li> {strIngredient2 && strIngredient2}</li>
        <li> {strIngredient3 && strIngredient3}</li>

        <li> {strIngredient4 && strIngredient4}</li>
        <li> {strIngredient5 && strIngredient5}</li>
        <li> {strIngredient6 && strIngredient6}</li>
      </ul>
      <p>Serve in a {strGlass}</p>
      <p>{strInstructions}</p>
      <h5 class="center-align">
        {true ? (
          <a
            className="waves-effect waves-light btn"
            onClick={(e) => {
              // saveDrink(idDrink);
              toggleFavButtonCopy("Saved!");
            }}
          >
            {favButtonCopy}
          </a>
        ) : (
          <p>Sign in to save your favourites</p>
        )}
      </h5>
    </>
  );
}
