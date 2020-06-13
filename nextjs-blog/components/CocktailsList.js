import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import PropTypes from "prop-types";
import { get } from "lodash/object";

import CocktailDetail from "../components/CocktailDetail";
import withAuthUser from "../utils/pageWrappers/withAuthUser";
import withAuthUserInfo from "../utils/pageWrappers/withAuthUserInfo";

function CocktailsList({ drinks, AuthUserInfo }) {
  const [selectedDrink, setSelectedDrink] = useState(drinks.drinks[0]);
  const AuthUser = get(AuthUserInfo, "AuthUser", null);

  useEffect(() => {
    console.log(AuthUser);
  });

  function setDetailsVisible(id) {
    const drink = drinks.drinks.find((drink) => drink.idDrink === id);
    setSelectedDrink(drink);
  }

  function saveDrink(id) {
    // drink is saved to user in Firebase
    saveSelectedDrink(drink);
  }

  return (
    <>
      <div class="row">
        <div class="col s12 m8 l9">
          {drinks.drinks &&
            drinks.drinks.map(
              ({ idDrink, strDrinkThumb, strDrink, strIBA, strAlcoholic }) => (
                <Card
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
          <CocktailDetail
            selectedDrink={selectedDrink}
            authUserInfo={AuthUserInfo}
          />
        </div>
      </div>
    </>
  );
}

CocktailsList.getInitialProps = async (ctx) => {
  // Get the AuthUserInfo object. This is set in `withAuthUser.js`.
  // The AuthUserInfo object is available on both the server and client
  console.log(ctx);
  const AuthUserInfo = get(ctx, "myCustomData.AuthUserInfo", null);
  const AuthUser = get(AuthUserInfo, "AuthUser", null);

  // You can also get the token (e.g., to authorize a request when fetching data)
  // const AuthUserToken = get(AuthUserInfo, 'token', null)

  // You can fetch data here.
  const data = await mockFetchData(get(AuthUser, "id"));

  return {
    data,
  };
};

CocktailsList.propTypes = {
  AuthUserInfo: PropTypes.shape({
    AuthUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      emailVerified: PropTypes.bool.isRequired,
    }),
    token: PropTypes.string,
  }),
  drinks: PropTypes.shape().isRequired,
};

CocktailsList.defaultProps = {
  AuthUserInfo: null,
};

export default withAuthUser(withAuthUserInfo(CocktailsList));
