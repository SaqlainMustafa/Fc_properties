import React, { useState } from "react";
import JsonData from "../components/Data.json";
import ReactPaginate from "react-paginate";

function App() {
    const [users, setUsers] = useState(JsonData.slice(0, 80));
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
                <div className="col-md-6 card-col">
                    <img src={user.thumbnail} alt='' />
                    <div className='card-title'>
                        <h3 className="title">{user.title}</h3>
                    </div>
                </div>
            );
        });

    const pageCount = Math.ceil(users.length / usersPerPage);

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <div className="container space-section d-flex justify-content-center flex-wrap ms-auto me-auto">
                {displayUsers}
                <ReactPaginate
                    containerClassName="pagination d-flex justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    breakLabel="..."
                    nextLabel="next"
                    onPageChange={handlePageClick}
                    breakClassName="page-item"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLinkClassName="page-link"
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    // previousLabel="previous"
                    renderOnZeroPageCount={null}
                    activeClassName="active"
                />
            </div>
        </>
    );
}

export default App;