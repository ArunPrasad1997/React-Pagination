import React from "react";
import { Link } from "react-router-dom";

function BeerItems({ beersList }) {
  return (
    <tbody>
      {beersList.map((data) => (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.tagline}</td>
          <td>{data.first_brewed}</td>
          <td>
            <img
              src={data.image_url}
              className="img-thumbnail"
              alt={data.name}
              width={50}
              height={50}
            />
          </td>
          <td><Link to={`/beer-details/${data.id}`}>Details</Link></td>
        </tr>
      ))}
    </tbody>
  );
}

export default BeerItems;
