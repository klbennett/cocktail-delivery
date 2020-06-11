import React from "react";

export default function CocktailsList({ drinks }) {
  return (
    <div className="row">
      {drinks.drinks &&
        drinks.drinks.map(
          ({ strDrinkThumb, strDrink, strIBA, strAlcoholic }) => (
            <div className="col s12 m6 l3" key={strDrink}>
              <div className={`${strDrink} container`}>
                <img
                  src={strDrinkThumb}
                  className="circle responsive-img"
                  width="400"
                />
                <p>{strDrink}</p>

                <p>{strIBA}</p>

                <p>{strAlcoholic}</p>

                <a className="waves-effect waves-light btn">
                  Add to Favourites
                </a>
              </div>
            </div>
          )
        )}
    </div>
  );
}
