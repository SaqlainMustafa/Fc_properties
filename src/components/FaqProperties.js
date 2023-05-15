import React from 'react'
import faqProperty from '../assets/images/faq-property-img.png';
import whyFaq from '../assets/images/why-faq-img.png';


function FaqProperties() {
    return (
        <>
            <div className="faq-property-section">
                <div className="container">
                    <div className="row faq-property-flex">
                         <div className="col-md-7 mt-md-0 mt-5">
                            <div className="faq-properties-detail-content">
                                <h3 className='faq-property-heading'>About F&C Properties</h3>
                                <p className='about-text faq-property-text'>F&C Properties operates in one of the most significant international hubs of the 21’st century, Dubai - where culture co-exists with cutting-edge technologies, in the city committed to excellence, that has grown into a vibrant cosmopolitan community. F&C Properties welcomes customers from all over the globe with a wide range of real-estate-focused services in affiliation with the top–of–the–range developers of Dubai like Emaar, Dubai Holding, Meeras, District One, Sobha, SLS, and more. Discover the true essence of what the World calls Real Estate Dubai, the oasis of investment safety and quality with the F&C Properties international team of professional real estate consultants.</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="faq-properties-img-content">
                                <img className='w-100' src={faqProperty} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why-faq-propert-section">
                    <div className="row why-faq-flex align-items-center">
                        <div className="col-md-4 mt-md-0 mt-3">
                            <div className="why-faq-img-content">
                                <img className='why-faq-img' src={whyFaq} alt='' />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="why-faq-detail-content">
                                <h3 className='about-headings why-faq-heading'>Why F&C Properties?</h3>
                                <p className=' about-text why-faq-text'>Our philosophy goes far beyond the Buy Property and Rent Property business model.F&C Properties is a customer satisfaction-driven international team that continues to excel as the leading advocate of long-term relations with those who call Dubai “Home”. We believe that deep appreciation and mutual loyalty are what we offer to those who trust us.F&C Properties is a one-stop-shop solution for Property Management, Buy Property, and Rent Property in Real Estate Dubai's growing market.Enjoy comprehensive, high-quality, multi-lingual services based on the professional expertise that has been carefully built, stiving to the excellence of Dubai’s energy and spirit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqProperties