import React from 'react'
import visionImg from '../assets/images/vision-img.png';
import missionImg from '../assets/images/mission-img.png';



function Vision() {
    return (
        <>
            <div className="vision-section">
                <div className="container">
                    <div className="row vision-flex align-items-center">
                        <div className="col-md-7">
                            <div className="vision-detail-content">
                                <h3 className='about-headings vision-heading'>Our Vision</h3>
                                <p className='about-text vision-text mt-1'>We believe that F&C Properties' future is connected to the success and prosperity of our happy customers. We are building a community of people connected with common beliefs that make F&C Properties one of Dubai's most reputable and trusted real estate brokerage firms.</p>
                            </div>
                        </div>
                        <div className="col-md-5 mt-md-0 mt-4 ps-md-0 ps-2.5">
                            <div className="vision-img-content">
                                <img className='w-100' src={visionImg} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="mission-content">
                        <div className="row mission-flex align-items-center">
                            <div className="col-md-5 mt-md-0 mt-4 pe-md-0 pe-2.5">
                                <div className="mission-img-content">
                                    <img className='w-100' src={missionImg} alt='' />
                                </div>

                            </div>
                            <div className="col-md-7">
                                <div className="mission-detail-content">
                                    <h3 className='about-headings vision-heading'>Our Mission</h3>
                                    <p className='about-text mission-text mt-1'>The way we ensure the success, prosperity, and happiness of our customers and team is our daily strive for the “Excellence in Dubai Real Estate Services”. We help people to find homes and invest in Real Estate with honesty, integrity, and deep knowledge of the products.</p>
                                    <p className='about-text mission-text mt-5'>The professional and ethical qualities of our team gain trust among our happy customers that enjoy smooth processing of complicated Buy Property, Rent Property, and Property Management transactions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vision