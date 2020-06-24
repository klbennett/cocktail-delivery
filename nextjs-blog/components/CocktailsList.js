import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import PropTypes from "prop-types";
import { get } from "lodash/object";
import CocktailDetail from "../components/CocktailDetail";
import { addFavourite } from "../lib/actions";

function CocktailsList({ data }) {
  const { drinks } = data;

  useEffect(() => {
    console.log(drinks);

  })
  const [selectedDrink, setSelectedDrink] = useState(drinks[0]);

  function setDetailsVisible(id) {
    const drink = drinks.find((drink) => drink.idDrink === id);
    setSelectedDrink(drink);
  }

  function saveDrink() {
    // drink is saved to collection in Firebase
    addFavourite(selectedDrink);
  }

  return (
    <>
      <div class="row">
        <div class="col s12 m8 l9">
          {drinks &&
            drinks.map(
              ({ idDrink, strDrinkThumb, strDrink, strIBA, strAlcoholic }) => (
                <Card
                  key={idDrink}
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
        <div class="col s12 m4 l3 grey lighten-2 full-height">
          {selectedDrink && (
            <CocktailDetail
              selectedDrink={selectedDrink}
              saveDrink={saveDrink}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default CocktailsList;
