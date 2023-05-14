import React, { useState } from 'react'
import JsonData from "../components/Data.json";
import ReactPaginate from "react-paginate";
import fiveHolding from '../assets/images/five-holding-img.png';
import youtubeIcon from '../assets/images/youtube-icon.png';
import phoneIcon from '../assets/images/phone-icon.png';
import gmailIcon from '../assets/images/gmail-icon.png';
import whatsappIcon from '../assets/images/whatsapp-icon.png';


function FiveJbr() {
    const [users, setUsers] = useState(JsonData.slice(0, 100));
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
                <div className="col-md-6 jbr-col">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-6 col-6 pe-0">
                                <img className='jbr-img' src={user.thumbnail} alt='' />
                            </div>
                            <div className="col-lg-6 col-6 ps-0">
                                <div className="jbr-content">
                                    <span className='jbr-price'>{user.price}</span>
                                    <h6 className='jbr-title'>{user.brand}</h6>
                                    <div className='d-flex align-items-center five-holding-content'>
                                        <img className='slider-img' src={fiveHolding} alt='' />
                                        <p className='jbr-category'>{user.category}</p>
                                    </div>
                                    <div className="district-content">
                                        <p className='district-text'>Район:<span className='ms-2'>{user.district}</span></p>
                                    </div>
                                    <div className="d-flex align-items-center review-content mt-1">
                                        <a href="/">
                                            <img className='youtube-icon' src={youtubeIcon} alt='' />
                                        </a>
                                        <p className='review-text ms-1'>Видео обзор</p>
                                    </div>
                                </div>
                                <div className="jbr-social-content d-flex justify-content-between">
                                    <ul className='d-flex jbr-social-list ps-0 mb-0'>
                                        <li className='jbr-item'>
                                            <a href="/" className='jbr-link'><img className='youtube-icon' src={phoneIcon} alt='' /></a>
                                        </li>
                                        <li className='jbr-item'>
                                            <a href="/" className='jbr-link'><img className='youtube-icon' src={gmailIcon} alt='' /></a>
                                        </li>
                                        <li className='jbr-item'>
                                            <a href="/" className='jbr-link'><img className='youtube-icon' src={whatsappIcon} alt='' /></a>
                                        </li>
                                    </ul>
                                    <a href="/" className='learn-more-btn'>ПОДРОБНЕЕ</a>
                                </div>
                            </div>
                        </div>
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
            <div className="container jbr-section d-flex justify-content-center flex-wrap">
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
    )
}

export default FiveJbr