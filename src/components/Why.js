import React from 'react'
import whyImg1 from '../assets/images/why-img-1.png';
import whyImg2 from '../assets/images/why-img-2.png';
import whyImg3 from '../assets/images/why-img-3.png';
import whyMblImg1 from '../assets/images/why-img-mbl-1.png';
import whyMblImg2 from '../assets/images/why-img-mbl-2.png';
import whyMblImg3 from '../assets/images/why-img-mbl-3.png';
// import effect1 from '../assets/images/effect-1.png';
// import effect2 from '../assets/images/effect-2.png';
// import effect3 from '../assets/images/effect-3.png';



function Why() {
    return (
        <>
            <div className="why-container">
                <div className="why-wrapper">
                    <h2 className="why-title">Why we ARE?</h2>
                    <div className='why-content d-flex'>

                        <div className="why-left">
                            <div className="why-left-1">
                                <img className='why-img-1' src={whyImg1} alt='' />
                                <img className='why-mbl-img-1' src={whyMblImg1} alt='' />
                                {/* <img className='why-effect-1' src={effect1} alt='' /> */}
                            </div>
                            <div className="why-left-2">
                                <img className='why-img-2' src={whyImg2} alt='' />
                                <img className='why-mbl-img-2' src={whyMblImg2} alt='' />
                                {/* <img className='why-effect-2' src={effect2} alt='' /> */}
                            </div>
                        </div>

                        <div className="why-right">
                            <img className='why-img-3 d-flex ms-auto' src={whyImg3} alt='' />
                            <img className='why-mbl-img-3' src={whyMblImg3} alt='' />
                            {/* <img className='why-effect-3' src={effect3} alt='' /> */}
                        </div>
                    </div>
                    {/* <figure>
                    <img className='why-img-1' src={whyImg1} alt='' />
                    <img className='why-mbl-img-1' src={whyMblImg1} alt='' />
                    <img className='why-effect-1' src={effect1} alt='' />

                    </figure>
                    <figure>
                    <img className='why-img-3' src={whyImg3} alt='' />
                    <img className='why-mbl-img-2' src={whyMblImg2} alt='' />
                    <img className='why-effect-3' src={effect3} alt='' />
                    </figure> */}
                    {/* <figure>
                    <img className='why-img-2' src={whyImg2} alt='' />
                    <img className='why-mbl-img-3' src={whyMblImg3} alt='' />
                    <img className='why-effect-2' src={effect2} alt='' />
                    </figure> */}
                    <h2 className="why-title why-stroke-title">Why we ARE?</h2>
                </div>

                <div className="why-paragraphs-content">
                    <p className='why-text'>F&C Properties operates in one of the most significant international hubs of the 21’st century, Dubai - where culture co-exists with cutting-edge technologies, in the city committed to excellence, that has grown into a vibrant cosmopolitan community.</p>
                    <p className='why-text'>F&C Properties welcomes customers from all over the globe with a wide range of real-estate-focused services in affiliation with the top–of–the–range developers of Dubai like Emaar, Dubai Holding, Meeras, District One, Sobha, SLS, and more.</p>
                </div>
            </div>
        </>
    )
}

export default Why