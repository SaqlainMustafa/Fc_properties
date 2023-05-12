import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from '../assets/images/projects-slide-1.png';
import sliderimg2 from '../assets/images/projects-slide-2.png';
import sliderimg3 from '../assets/images/projects-slide-3.png';
import maskimg from '../assets/images/mask-img.png';
import arrowright from '../assets/images/arrow-right.png';
import carduser from '../assets/images/card-user-img-1.png';
// import whatsapp from '../assets/images/whatsapp-2.png';
import { RiWhatsappLine } from 'react-icons/ri';
import hotLine from '../assets/images/hot-bg-line.png';

function HotProjects() {
    const imgsetting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1
    };
    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
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
            <div className="hot-projects-container">
                <div className="hot-project-slide-bg">
                    <img className='hot-line-img w-100' src={hotLine} alt='' />
                </div>
                <div className="container">
                    <h3 className="hot-projects-heading">Hot projects in Dubai</h3>
                    <div className="hot-projects-slider">
                        <Slider {...settings}>
                            <div className='card'>
                                <div className="card-top">
                                    <Slider {...imgsetting}>
                                        <img className='slider-img' src={sliderimg1} alt='' />
                                        <img className='slider-img' src={sliderimg1} alt='' />
                                        <img className='slider-img' src={sliderimg1} alt='' />
                                        <img className='slider-img' src={sliderimg1} alt='' />
                                    </Slider>
                                </div>
                                <div className="card-body">
                                    <div className="card-body-middle d-flex justify-content-between">
                                        <div className="card-body-left">
                                            <p className='card-title'>Safa Two </p>
                                            <p className='d-flex align-items-center card-mask-content'><span><img className='mask-img' src={maskimg} alt='' /></span>Al Safa</p>
                                            <button className='btn apartment-btn'>Apartment</button>
                                        </div>
                                        <a href="/" className="card-body-right">
                                            <img className='arrow-img' src={arrowright} alt='' />
                                        </a>
                                    </div>

                                    <div className="body-bottom d-flex justify-content-between align-items-center">
                                        <div className="body-bottom-left d-flex align-items-center">
                                            <img className='arrow-img' src={carduser} alt='' />
                                            <div>
                                                <p>Yullia Roshkovich</p>
                                                <p>District Manager</p>
                                            </div>
                                        </div>
                                        <a href="/" className='body-bottom-right nav-whatsapp me-2'>
                                            <RiWhatsappLine className='nav-whatsapp-logo' />
                                        </a>
                                    </div>
                                </div>
                                <div className="card-img-btns">
                                    <button className='btn payment-btn'>20/80 Payment plan</button>
                                    <button className='btn sogono-btn'>By Degrisogono</button>
                                </div>
                            </div>
                            <div className='card'>
                                <div className="card-top">
                                    <Slider {...imgsetting}>
                                        <img className='slider-img' src={sliderimg2} alt='' />
                                        <img className='slider-img' src={sliderimg2} alt='' />
                                        <img className='slider-img' src={sliderimg2} alt='' />
                                        <img className='slider-img' src={sliderimg2} alt='' />
                                    </Slider>
                                </div>
                                <div className="card-body">
                                    <div className="card-body-middle d-flex justify-content-between">
                                        <div className="card-body-left">
                                            <p className='card-title'>Safa Two </p>
                                            <p className='d-flex align-items-center card-mask-content'><span><img className='mask-img' src={maskimg} alt='' /></span>Al Safa</p>
                                            <button className='btn apartment-btn'>Apartment</button>
                                        </div>
                                        <div className="card-body-right">
                                            <a href="/">
                                                <img className='arrow-img' src={arrowright} alt='' />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="body-bottom d-flex justify-content-between align-items-center">
                                        <div className="body-bottom-left d-flex align-items-center">
                                            <img className='arrow-img' src={carduser} alt='' />
                                            <div>
                                                <p>Yullia Roshkovich</p>
                                                <p>District Manager</p>
                                            </div>
                                        </div>
                                        <a href="/" className='body-bottom-right nav-whatsapp me-2'>
                                            <RiWhatsappLine className='nav-whatsapp-logo' />
                                        </a>
                                    </div>
                                </div>
                                <div className="card-img-btns">
                                    <button className='btn payment-btn'>20/80 Payment plan</button>
                                    <button className='btn sogono-btn'>By Degrisogono</button>
                                </div>
                            </div>
                            <div className='card'>
                                <div className="card-top">
                                    <Slider {...imgsetting}>
                                        <img className='slider-img' src={sliderimg3} alt='' />
                                        <img className='slider-img' src={sliderimg3} alt='' />
                                        <img className='slider-img' src={sliderimg3} alt='' />
                                        <img className='slider-img' src={sliderimg3} alt='' />
                                    </Slider>
                                </div>
                                <div className="card-body">
                                    <div className="card-body-middle d-flex justify-content-between">
                                        <div className="card-body-left">
                                            <p className='card-title'>Safa Two </p>
                                            <p className='d-flex align-items-center card-mask-content'><span><img className='mask-img' src={maskimg} alt='' /></span>Al Safa</p>
                                            <button className='btn apartment-btn'>Apartment</button>
                                        </div>
                                        <div className="card-body-right">
                                            <a href="/">
                                                <img className='arrow-img' src={arrowright} alt='' />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="body-bottom d-flex justify-content-between align-items-center">
                                        <div className="body-bottom-left d-flex align-items-center">
                                            <img className='arrow-img' src={carduser} alt='' />
                                            <div>
                                                <p>Yullia Roshkovich</p>
                                                <p>District Manager</p>
                                            </div>
                                        </div>
                                        <a href="/" className='body-bottom-right nav-whatsapp me-2'>
                                            <RiWhatsappLine className='nav-whatsapp-logo' />
                                        </a>
                                    </div>
                                </div>
                                <div className="card-img-btns">
                                    <button className='btn payment-btn'>20/80 Payment plan</button>
                                    <button className='btn sogono-btn'>By Degrisogono</button>
                                </div>
                            </div>
                            <div className='card'>
                                <div className="card-top">
                                    <Slider {...imgsetting}>
                                        <img className='slider-img' src={sliderimg1} alt='' />
                                        <img className='slider-img' src={sliderimg1} alt='' />
                                        <img className='slider-img' src={sliderimg1} alt='' />
                                        <img className='slider-img' src={sliderimg1} alt='' />
                                    </Slider>
                                </div>
                                <div className="card-body">
                                    <div className="card-body-middle d-flex justify-content-between">
                                        <div className="card-body-left">
                                            <p className='card-title'>Safa Two </p>
                                            <p className='d-flex align-items-center card-mask-content'><span><img className='mask-img' src={maskimg} alt='' /></span>Al Safa</p>
                                            <button className='btn apartment-btn'>Apartment</button>
                                        </div>
                                        <div className="card-body-right">
                                            <a href="/">
                                                <img className='arrow-img' src={arrowright} alt='' />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="body-bottom d-flex justify-content-between align-items-center">
                                        <div className="body-bottom-left d-flex align-items-center">
                                            <img className='arrow-img' src={carduser} alt='' />
                                            <div>
                                                <p>Yullia Roshkovich</p>
                                                <p>District Manager</p>
                                            </div>
                                        </div>
                                        <a href="/" className='body-bottom-right nav-whatsapp me-2'>
                                            <RiWhatsappLine className='nav-whatsapp-logo' />
                                        </a>
                                    </div>
                                </div>
                                <div className="card-img-btns">
                                    <button className='btn payment-btn'>20/80 Payment plan</button>
                                    <button className='btn sogono-btn'>By Degrisogono</button>
                                </div>
                            </div>
                            <div className='card'>
                                <div className="card-top">
                                    <Slider {...imgsetting}>
                                        <img className='slider-img' src={sliderimg2} alt='' />
                                        <img className='slider-img' src={sliderimg2} alt='' />
                                        <img className='slider-img' src={sliderimg2} alt='' />
                                        <img className='slider-img' src={sliderimg2} alt='' />
                                    </Slider>
                                </div>
                                <div className="card-body">
                                    <div className="card-body-middle d-flex justify-content-between">
                                        <div className="card-body-left">
                                            <p className='card-title'>Safa Two </p>
                                            <p className='d-flex align-items-center card-mask-content'><span><img className='mask-img' src={maskimg} alt='' /></span>Al Safa</p>
                                            <button className='btn apartment-btn'>Apartment</button>
                                        </div>
                                        <div className="card-body-right">
                                            <a href="/">
                                                <img className='arrow-img' src={arrowright} alt='' />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="body-bottom d-flex justify-content-between align-items-center">
                                        <div className="body-bottom-left d-flex align-items-center">
                                            <img className='arrow-img' src={carduser} alt='' />
                                            <div>
                                                <p>Yullia Roshkovich</p>
                                                <p>District Manager</p>
                                            </div>
                                        </div>
                                        <a href="/" className='body-bottom-right nav-whatsapp me-2'>
                                            <RiWhatsappLine className='nav-whatsapp-logo' />
                                        </a>
                                    </div>
                                </div>
                                <div className="card-img-btns">
                                    <button className='btn payment-btn'>20/80 Payment plan</button>
                                    <button className='btn sogono-btn'>By Degrisogono</button>
                                </div>
                            </div>
                            <div className='card'>
                                <div className="card-top">
                                    <Slider {...imgsetting}>
                                        <img className='slider-img' src={sliderimg3} alt='' />
                                        <img className='slider-img' src={sliderimg3} alt='' />
                                        <img className='slider-img' src={sliderimg3} alt='' />
                                        <img className='slider-img' src={sliderimg3} alt='' />
                                    </Slider>
                                </div>
                                <div className="card-body">
                                    <div className="card-body-middle d-flex justify-content-between">
                                        <div className="card-body-left">
                                            <p className='card-title'>Safa Two </p>
                                            <p className='d-flex align-items-center card-mask-content'><span><img className='mask-img' src={maskimg} alt='' /></span>Al Safa</p>
                                            <button className='btn apartment-btn'>Apartment</button>
                                        </div>
                                        <div className="card-body-right">
                                            <a href="/">
                                                <img className='arrow-img' src={arrowright} alt='' />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="body-bottom d-flex justify-content-between align-items-center">
                                        <div className="body-bottom-left d-flex align-items-center">
                                            <img className='arrow-img' src={carduser} alt='' />
                                            <div>
                                                <p>Yullia Roshkovich</p>
                                                <p>District Manager</p>
                                            </div>
                                        </div>
                                        <a href="/" className='body-bottom-right nav-whatsapp me-2'>
                                            <RiWhatsappLine className='nav-whatsapp-logo' />
                                        </a>
                                    </div>
                                </div>
                                <div className="card-img-btns">
                                    <button className='btn payment-btn'>20/80 Payment plan</button>
                                    <button className='btn sogono-btn'>By Degrisogono</button>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotProjects