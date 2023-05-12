import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newsImg from '../assets/images/news-card-img.png';
import msgIcon from '../assets/images/msg-icon.png';

function LastNews() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="last-news-container">
                <h3 className='news-heading'>Last News</h3>
                <div className="container">
                    <div className="last-news-wrapper">
                        <div className="last-news-slider">
                            <Slider {...settings}>
                                <div className="card news-slider">
                                    <img className='slider-img' src={newsImg} alt='' />
                                    <div className="card-body">
                                        <h5 className="card-title">Damac Safa one | Luxury life</h5>
                                        <p className="card-text">Luxury Apartments, located in the heart of Dubai.</p>
                                        <div className='border-shape'></div>
                                        <div className="card-project-content d-flex justify-content-between">
                                            <a href="/" className="text-decoration-none new-project">New Project</a>
                                            <span className='d-flex align-items-center'>
                                                <img className='msg-icon me-2' src={msgIcon} alt='' />
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card news-slider">
                                    <img className='slider-img' src={newsImg} alt='' />
                                    <div className="card-body">
                                        <h5 className="card-title">Damac Safa one | Luxury life</h5>
                                        <p className="card-text">Luxury Apartments, located in the heart of Dubai.</p>
                                        <div className='border-shape'></div>
                                        <div className="card-project-content d-flex justify-content-between">
                                            <a href="/" className="text-decoration-none new-project">New Project</a>
                                            <span className='d-flex align-items-center'>
                                                <img className='msg-icon me-2' src={msgIcon} alt='' />
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card news-slider">
                                    <img className='slider-img' src={newsImg} alt='' />
                                    <div className="card-body">
                                        <h5 className="card-title">Damac Safa one | Luxury life</h5>
                                        <p className="card-text">Luxury Apartments, located in the heart of Dubai.</p>
                                        <div className='border-shape'></div>
                                        <div className="card-project-content d-flex justify-content-between">
                                            <a href="/" className="text-decoration-none new-project">New Project</a>
                                            <span className='d-flex align-items-center'>
                                                <img className='msg-icon me-2' src={msgIcon} alt='' />
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card news-slider">
                                    <img className='slider-img' src={newsImg} alt='' />
                                    <div className="card-body">
                                        <h5 className="card-title">Damac Safa one | Luxury life</h5>
                                        <p className="card-text">Luxury Apartments, located in the heart of Dubai.</p>
                                        <div className='border-shape'></div>
                                        <div className="card-project-content d-flex justify-content-between">
                                            <a href="/" className="text-decoration-none new-project">New Project</a>
                                            <span className='d-flex align-items-center'>
                                                <img className='msg-icon me-2' src={msgIcon} alt='' />
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card news-slider">
                                    <img className='slider-img' src={newsImg} alt='' />
                                    <div className="card-body">
                                        <h5 className="card-title">Damac Safa one | Luxury life</h5>
                                        <p className="card-text">Luxury Apartments, located in the heart of Dubai.</p>
                                        <div className='border-shape'></div>
                                        <div className="card-project-content d-flex justify-content-between">
                                            <a href="/" className="text-decoration-none new-project">New Project</a>
                                            <span className='d-flex align-items-center'>
                                                <img className='msg-icon me-2' src={msgIcon} alt='' />
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card news-slider">
                                    <img className='slider-img' src={newsImg} alt='' />
                                    <div className="card-body">
                                        <h5 className="card-title">Damac Safa one | Luxury life</h5>
                                        <p className="card-text">Luxury Apartments, located in the heart of Dubai.</p>
                                        <div className='border-shape'></div>
                                        <div className="card-project-content d-flex justify-content-between">
                                            <a href="/" className="text-decoration-none new-project">New Project</a>
                                            <span className='d-flex align-items-center'>
                                                <img className='msg-icon me-2' src={msgIcon} alt='' />
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LastNews