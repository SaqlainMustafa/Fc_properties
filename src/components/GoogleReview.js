import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewImg1 from '../assets/images/card-img-top-1.png';
import reviewImg2 from '../assets/images/card-img-top-2.png';
import reviewImg3 from '../assets/images/card-img-top-3.png';
import reviewbottom1 from '../assets/images/review-bottom-1.png';
import reviewbottom2 from '../assets/images/review-bottom-2.png';
import reviewbottom3 from '../assets/images/review-bottom-3.png';
import googleReview from '../assets/images/review-start.png';


function GoogleReview() {
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="google-review-container container">
                <div className="container">
                    <h3 className="google-review-heading">Google Reviews</h3>
                    <div className="google-review-wrapper">
                        <Slider {...settings}>
                            <div className="google-review-card">
                                <div className="card-body-top">
                                    <div className="img-box">
                                        <img className='card-img-top' src={reviewImg1} alt='' />
                                    </div>
                                    <h4 className='card-title'>Elizaveta Glazova</h4>
                                    <p className='card-text'>We had great experience working with the agent Parvizkhon. He helped us find an apartment in Dubai for investment. He was very friendly, answered all our questions, supported us during all process of buying the apartment, listened to all our wishes. Would definitely recommend!</p>
                                    <a href="/" className='card-read-more'>......read more......</a>
                                    <div className="google-review-start-content">
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                    </div>
                                </div>
                                <div className="card-bottom d-flex justify-content-center align-items-center">
                                    <div className="img-box">
                                        <img className='card-img-top' src={reviewbottom1} alt='' />
                                    </div>
                                    <div className="card-bottom-text">
                                        <h4 className='card-title'>Parvizkhon</h4>
                                        <p className='card-text'>District manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="google-review-card">
                                <div className="card-body-top">
                                    <div className="img-box">
                                        <img className='card-img-top' src={reviewImg2} alt='' />
                                    </div>
                                    <h4 className='card-title'>Elena LANSKI</h4>
                                    <p className='card-text'>Thank u F&C for providing a great experience. From the 1st day been communicating with Mokhir Muminkhodjaev. Found me exactly what I wanted. Always in touch and answering all my questions, solving all the problems with payments that I had due to circumstances. </p>
                                    <a href="/" className='card-read-more'>......read more......</a>
                                    <div className="google-review-start-content">
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                    </div>
                                </div>
                                <div className="card-bottom d-flex justify-content-center align-items-center">
                                    <div className="img-box">
                                        <img className='card-img-top' src={reviewbottom2} alt='' />
                                    </div>
                                    <div className="card-bottom-text">
                                        <h4 className='card-title'>Mokhir</h4>
                                        <p className='card-text'>District manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="google-review-card">
                                <div className="card-body-top">
                                    <div className="img-box">
                                        <img className='card-img-top' src={reviewImg3} alt='' />
                                    </div>
                                    <h4 className='card-title'>Claudines Empire</h4>
                                    <p className='card-text'>She's simply the best agent I have come across , I have dealt with many agents in my line of work but She's different and help anytime shes called upon, Chioma Chigbu is the best agent I know at the moment, thank you for being good at your job.</p>
                                    {/* <a href="/" className='card-read-more'>......read more......</a> */}
                                    <div className="google-review-start-content">
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                    </div>
                                </div>
                                <div className="card-bottom d-flex justify-content-center align-items-center">
                                    <div className="img-box">
                                        <img className='card-img-top' src={reviewbottom3} alt='' />
                                    </div>
                                    <div className="card-bottom-text">
                                        <h4 className='card-title'>Chioma</h4>
                                        <p className='card-text'>District manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="google-review-card">
                                <div className="card-body-top">
                                    <div className="img-box">
                                        <img className='card-img-top' src={reviewImg3} alt='' />
                                    </div>
                                    <h4 className='card-title'>Elizaveta Glazova</h4>
                                    <p className='card-text'>We had great experience working with the agent Parvizkhon. He helped us find an apartment in Dubai for investment. He was very friendly, answered all our questions, supported us during all process of buying the apartment, listened to all our wishes. Would definitely recommend!</p>
                                    <a href="/" className='card-read-more'>......read more......</a>
                                    <div className="google-review-start-content">
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                    </div>
                                </div>
                                <div className="card-bottom d-flex justify-content-center align-items-center">
                                    <div className="img-box">
                                        <img className='card-img-top' src={reviewbottom3} alt='' />
                                    </div>
                                    <div className="card-bottom-text">
                                        <h4 className='card-title'>Parvizkhon</h4>
                                        <p className='card-text'>District manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="google-review-card">
                                <div className="card-body-top">
                                    <div className="img-box">
                                        <img className='card-img-top' src={reviewImg3} alt='' />
                                    </div>
                                    <h4 className='card-title'>Elena LANSKI</h4>
                                    <p className='card-text'>We had great experience working with the agent Parvizkhon. He helped us find an apartment in Dubai for investment. He was very friendly, answered all our questions, supported us during all process of buying the apartment, listened to all our wishes. Would definitely recommend!</p>
                                    <a href="/" className='card-read-more'>......read more......</a>
                                    <div className="google-review-start-content">
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                        <img className='card-img-top' src={googleReview} alt='' />
                                    </div>
                                </div>
                                <div className="card-bottom d-flex justify-content-center align-items-center">
                                    <div className="img-box">
                                        <img className='card-img-top' src={reviewbottom3} alt='' />
                                    </div>
                                    <div className="card-bottom-text">
                                        <h4 className='card-title'>Parvizkhon</h4>
                                        <p className='card-text'>District manager</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoogleReview