import React, { useEffect, useState } from "react";
import TableCard from "../Table-Card/Table-Card";
import Pagination from "react-js-pagination";
import BeerItems from "../Beer-Items/Beer-Items";
import BeerFiltering from "../Date-FIlter/Beer-Filtering";
// import { useSelector } from "react-redux";

function PaginationTable() {
  //   const paginateForward = useSelector((state) => state.currentState);
  const [details, setDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=10`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setDetails(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // call API to get data based on pageNumber
    let currentPage = pageNumber;
    console.log(currentPage);
    fetchBeers(currentPage);
  };

  const fetchBeers = (page) => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setDetails(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const displayFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <React.Fragment>
      <TableCard>
        {showFilter && <BeerFiltering />}
        <section className="text-center my-4">
          <button className="btn btn-secondary" onClick={displayFilter}>
            {showFilter ? "Cancel" : "Filter"}
          </button>
        </section>
        <br />
        {!showFilter && <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Tag Line</th>
              <th>First Brewed</th>
              <th>Logo</th>
            </tr>
          </thead>
          <BeerItems beersList={details} />
        </table>}
      </TableCard>
      <div className="d-flex justify-content-center py-2">
        {!showFilter && <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={currentPage}
          itemsCountPerPage={10}
          totalItemsCount={325}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />}
      </div>
    </React.Fragment>
  );
}

export default PaginationTable;
