import React, { useState } from "react";
import "./Beer-Filtering.css";

function BeerFiltering() {
  const [brewedBefore, setBrewedBefore] = useState();
  const [brewedAfter, setBrewedAfter] = useState();

  const submitHandlerBefore = (e) => {
    function reverseDate(originalDateString) {
      const dateParts = originalDateString.split("-");

      if (dateParts.length !== 3) {
        throw new Error("Invalid date format");
      }

      const year = dateParts[0];
      const month = dateParts[1];
      const day = dateParts[2];

      return `${day}-${month}-${year}`;
    }

    const originalDate = brewedBefore;
    const reversedDate = reverseDate(originalDate);
    console.log(reversedDate); // Output: 31-08-2023

    e.preventDefault();
    const extractedDate = reversedDate.substring(3, 10);
    fetch(`https://api.punkapi.com/v2/beers?brewed_before=${extractedDate}`)
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  const submitHandlerAfter = (e) => {
    function reverseDateAfter(originalDateString) {
      const dateParts = originalDateString.split("-");

      if (dateParts.length !== 3) {
        throw new Error("Invalid date format");
      }

      const year = dateParts[0];
      const month = dateParts[1];
      const day = dateParts[2];

      return `${day}-${month}-${year}`;
    }

    const originalDate = brewedAfter;
    const reversedDate = reverseDateAfter(originalDate);
    console.log(reversedDate); // Output: 31-08-2023

    e.preventDefault();
    const extractedDate = reversedDate.substring(3, 10);
    fetch(`https://api.punkapi.com/v2/beers?brewed_after=${extractedDate}`)
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="filter-container">
      <h2>Brewed Filter</h2>
      {
        <form className="filter-form" onSubmit={submitHandlerBefore}>
          <label htmlFor="startDate">Brewed Before:</label>
          <input
            type="date"
            value={brewedBefore}
            onChange={(e) => setBrewedBefore(e.target.value)}
          />
          <button type="submit" hidden>Apply Filter</button>
        </form>
      }
      <br />
      <form className="filter-form" onSubmit={submitHandlerAfter}>
        <label htmlFor="endDate">Brewed After:</label>
        <input
          type="date"
          value={brewedAfter}
          onChange={(e) => setBrewedAfter(e.target.value)}
        />

        <button type="submit">Apply Filter</button>
      </form>
    </div>
  );
}

export default BeerFiltering;
