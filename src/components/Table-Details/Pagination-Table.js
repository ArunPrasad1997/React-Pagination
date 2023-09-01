import React, { useEffect, useState } from "react";
import TableCard from "../Table-Card/Table-Card";
import Pagination from "react-js-pagination";
import BeerItems from "../Beer-Items/Beer-Items";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Loading-Spinner/Loading-Spinner";
// import { useSelector } from "react-redux";

function PaginationTable() {
  //   const paginateForward = useSelector((state) => state.currentState);
  const [details, setDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=10`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setDetails(res);
        setShowLoading(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // call API to get data based on pageNumber
    setShowLoading(true);
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
          setShowLoading(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // const displayFilter = () => {
  //   setShowFilter(!showFilter);
  // };

  return (
    <React.Fragment>
      {/* {details.length === 0 && <LoadingSpinner />} */}
      {showLoading ? <LoadingSpinner /> : ""}
      <TableCard>
        <section className="text-center my-4">
          <Link to="/filter-beers">
            <button>Filter</button>
          </Link>
        </section>
        <br />
        <table className="table">
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
        </table>
      </TableCard>
      <div className="d-flex justify-content-center py-2">
        {details.length > 0 && (
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={currentPage}
            itemsCountPerPage={10}
            totalItemsCount={325}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default PaginationTable;
