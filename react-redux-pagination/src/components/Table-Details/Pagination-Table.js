import React, { useEffect, useState } from "react";
import TableCard from "../Table-Card/Table-Card";
import Pagination from "react-js-pagination";
// import { useSelector } from "react-redux";

function PaginationTable() {
  //   const paginateForward = useSelector((state) => state.currentState);
  const [details, setDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
  return (
    <React.Fragment>
      <TableCard>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Tag Line</th>
              <th>First Brewed</th>
            </tr>
          </thead>
          <tbody>
            {details.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.first_brewed}</td>
                <td>{data.first_brewed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
      <div className="d-flex justify-content-center py-2">
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={currentPage}
          itemsCountPerPage={10}
          totalItemsCount={325}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </React.Fragment>
  );
}

export default PaginationTable;
