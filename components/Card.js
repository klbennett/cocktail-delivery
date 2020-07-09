import React from "react";

export default function Card({
  selectDrink,
  idDrink,
  strDrink,
  strAlcoholic,
  strDrinkThumb,
  strIBA,
}) {
  return (
    <div className="col s12 m6 l3" key={strDrink}>
      <div className="container">
        <img
          src={strDrinkThumb}
          className="circle responsive-img"
          width="400"
        />
        <h4>{strDrink}</h4>
        <a
          className="waves-effect waves-light btn"
          onClick={(e) => selectDrink(idDrink)}
        >
          View Detail
        </a>
      </div>
      <style global jsx>{`
        .container {
          padding: 3em 0 3em 0;
        }
      `}</style>
    </div>
  );
}
