import React from 'react'
import downloadImg from '../assets/images/download-img.png';
// import downloadMblImg from '../assets/images/download-mbl-img.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Download() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1
	};
	return (
		<>
			<div className="container">
				<div className="download-container">
					<Slider {...settings}>
						<div className="download-slide d-flex justify-content-between">
							<div className="download-left">
								<p className='download-title'>Получите бессплатно топ 5 горячих проектров в Дубае</p>
								<img className='download-mbl-img w-100' src={downloadImg} alt='' />
								<div className="download-btn-content">
									<a href="/">
										<button className='download-btn'>Скачать</button>
									</a>
								</div>
							</div>
							<div className="download-right">
								<img className='download-img' src={downloadImg} alt='' />
							</div>
						</div>
						<div className="download-slide d-flex justify-content-between">
							<div className="download-left">
								<p className='download-title'>Получите бессплатно топ 5 горячих проектров в Дубае</p>
								<img className='download-mbl-img w-100' src={downloadImg} alt='' />
								<div className="download-btn-content">
									<a href="/">
										<button className='download-btn'>Скачать</button>
									</a>
								</div>
							</div>
							<div className="download-right">
								<img className='download-img' src={downloadImg} alt='' />
							</div>
						</div>
						<div className="download-slide d-flex justify-content-between">
							<div className="download-left">
								<p className='download-title'>Получите бессплатно топ 5 горячих проектров в Дубае</p>
								<img className='download-mbl-img w-100' src={downloadImg} alt='' />
								<div className="download-btn-content">
									<a href="/">
										<button className='download-btn'>Скачать</button>
									</a>
								</div>
							</div>
							<div className="download-right">
								<img className='download-img' src={downloadImg} alt='' />
							</div>
						</div>
						<div className="download-slide d-flex justify-content-between">
							<div className="download-left">
								<p className='download-title'>Получите бессплатно топ 5 горячих проектров в Дубае</p>
								<img className='download-mbl-img w-100' src={downloadImg} alt='' />
								<div className="download-btn-content">
									<a href="/">
										<button className='download-btn'>Скачать</button>
									</a>
								</div>
							</div>
							<div className="download-right">
								<img className='download-img' src={downloadImg} alt='' />
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</>
	)
}

export default Download