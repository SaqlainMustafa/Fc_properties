import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partnerImg1 from '../assets/images/slide-partner-1.png';
import partnerImg2 from '../assets/images/slide-partner-2.png';
import partnerImg3 from '../assets/images/slide-partner-3.png';
import partnerImg4 from '../assets/images/slide-partner-4.png';
import partnerImg5 from '../assets/images/slide-partner-5.png';
import partnerImg6 from '../assets/images/slide-partner-6.png';
import partnerImg7 from '../assets/images/slide-partner-7.png';
import partnerImg8 from '../assets/images/slide-partner-8.png';
import partnerImg9 from '../assets/images/slide-partner-9.png';

function Partners() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="our-partner-container">
                <h2 className='partner-heading'>Our Partners</h2>
                <div className="container-fluid">
                    <div className="partner-slider-wrapper">
                        <div className="partner-slider-1">
                            <Slider {...settings}>
                                <img className='slide-partner-img' src={partnerImg1} alt='' />
                                <img className='slide-partner-img' src={partnerImg2} alt='' />
                                <img className='slide-partner-img' src={partnerImg3} alt='' />
                                <img className='slide-partner-img' src={partnerImg4} alt='' />
                                <img className='slide-partner-img' src={partnerImg5} alt='' />
                                <img className='slide-partner-img' src={partnerImg1} alt='' />
                                <img className='slide-partner-img' src={partnerImg2} alt='' />
                                <img className='slide-partner-img' src={partnerImg3} alt='' />
                                <img className='slide-partner-img' src={partnerImg4} alt='' />
                                <img className='slide-partner-img' src={partnerImg5} alt='' />
                            </Slider>
                        </div>
                        <div className="partner-slider-1">
                            <Slider {...settings}>
                                <img className='slide-partner-img' src={partnerImg6} alt='' />
                                <img className='slide-partner-img' src={partnerImg7} alt='' />
                                <img className='slide-partner-img' src={partnerImg8} alt='' />
                                <img className='slide-partner-img' src={partnerImg9} alt='' />
                                <img className='slide-partner-img' src={partnerImg6} alt='' />
                                <img className='slide-partner-img' src={partnerImg7} alt='' />
                                <img className='slide-partner-img' src={partnerImg8} alt='' />
                                <img className='slide-partner-img' src={partnerImg9} alt='' />
                                <img className='slide-partner-img' src={partnerImg6} alt='' />
                                <img className='slide-partner-img' src={partnerImg6} alt='' />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners