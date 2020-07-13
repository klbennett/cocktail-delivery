import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import PropTypes from "prop-types";
import { get } from "lodash/object";
import CocktailDetail from "../components/CocktailDetail";
import { addFavourite, deleteFavourite } from "../lib/actions";

function CocktailsList({ data, user, favourites }) {
  const { drinks } = data;
  console.log(user);
  const [selectedDrink, setSelectedDrink] = useState(drinks[0]);

  function setDetailsVisible(id) {
    const drink = drinks.find((drink) => drink.idDrink === id);
    setSelectedDrink(drink);
  }

  function saveDrink() {
    // drink is saved to collection in Firebase
    addFavourite(selectedDrink);
  }

  function deleteDrink() {
    // drink is deleted from collection in Firebase
    deleteFavourite(selectedDrink);
  }

  return (
    <>
      <div class="row">
        <div class="col s12 m8 l9">
          {drinks.length > 0 &&
            drinks.map(
              (
                { idDrink, strDrinkThumb, strDrink, strIBA, strAlcoholic },
                idx
              ) => (
                <Card
                  key={idDrink + idx}
                  id={idDrink}
                  strDrinkThumb={strDrinkThumb}
                  strDrink={strDrink}
                  strIBA={strIBA}
                  strAlcoholic={strAlcoholic}
                  selectDrink={(e) => setDetailsVisible(idDrink)}
                />
              )
            )}
        </div>
        <div className="col s12 m4 l3 grey lighten-2 full-height">
          {selectedDrink && (
            <CocktailDetail
              selectedDrink={selectedDrink}
              saveDrink={saveDrink}
              deleteDrink={deleteDrink}
              user={user}
              favourites={favourites}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default CocktailsList;
