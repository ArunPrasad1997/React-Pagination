import React from "react";

function TableCard(props) {
  return (
    <div className="container-lg">
      <h2 className="text-center">Beers Details</h2>
      {props.children}
    </div>
  );
}

export default TableCard;
