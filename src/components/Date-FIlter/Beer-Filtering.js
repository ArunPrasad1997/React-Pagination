import React, { useState } from "react";
import "./Beer-Filtering.css";
import { Link, useNavigate } from "react-router-dom";

function BeerFiltering() {
  const [brewedBefore, setBrewedBefore] = useState();
  // const [brewedAfter, setBrewedAfter] = useState();

  const [brewedDataBefore, setbrewedDataBefore] = useState([]);

  // const [brewedDataAfter, setbrewedDataAfter] = useState([]);

  const navigate = useNavigate();

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
        setbrewedDataBefore(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  // const submitHandlerAfter = (e) => {
  //   function reverseDateAfter(originalDateString) {
  //     const dateParts = originalDateString.split("-");

  //     if (dateParts.length !== 3) {
  //       throw new Error("Invalid date format");
  //     }

  //     const year = dateParts[0];
  //     const month = dateParts[1];
  //     const day = dateParts[2];

  //     return `${day}-${month}-${year}`;
  //   }

  //   const originalDate = brewedAfter;
  //   const reversedDate = reverseDateAfter(originalDate);
  //   console.log(reversedDate); // Output: 31-08-2023

  //   e.preventDefault();
  //   const extractedDate = reversedDate.substring(3, 10);
  //   fetch(`https://api.punkapi.com/v2/beers?brewed_after=${extractedDate}`)
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((response) => {
  //       setbrewedDataAfter(response)
  //       console.log(response);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const cancelHandler = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <br />
      <div className="filter-container">
        <br />
        <br />
        <h2>Brewed Filter</h2>
        <br />
        <button type="button" onClick={cancelHandler}>
          Cancel Filter
        </button>
        <br />
        <form className="filter-form" onSubmit={submitHandlerBefore}>
          <label htmlFor="startDate">Brewed Before:</label>
          <input
            type="date"
            value={brewedBefore}
            onChange={(e) => setBrewedBefore(e.target.value)}
          />
          <button type="submit">Apply Filter</button>
        </form>
        <br />
        {/* <form className="filter-form" onSubmit={submitHandlerAfter}>
          <label htmlFor="endDate">Brewed After:</label>
          <input
            type="date"
            value={brewedAfter}
            onChange={(e) => setBrewedAfter(e.target.value)}
          />

          <button type="submit">Apply Filter</button>
        </form> */}
      </div>
      {/* Filtered Results */}
      <br />
      <br />
      <br />
    { brewedDataBefore.length > 0 &&  <table class="table my-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Tag Line</th>
            <th>First Brewed</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {brewedDataBefore.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.tagline}</td>
              <td>{data.first_brewed}</td>
              <td>
                {/* <button>Details</button> */}
                <Link to={`/beer-details/${data.id}`}>Details</Link>
              </td>
            </tr>
          ))}
          {/* {brewedDataAfter.map((data) => (
           <tr key={data.id}>
           <td>{data.id}</td>
           <td>{data.name}</td>
           <td>{data.tagline}</td>
           <td>{data.first_brewed}</td>
           <td>
             <button type="submit">Details</button>
           </td>
         </tr>
          ))} */}
        </tbody>
      </table>}
    </React.Fragment>
  );
}

export default BeerFiltering;
