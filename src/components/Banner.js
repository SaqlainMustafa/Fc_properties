import React from 'react'
import search from '../assets/images/search.png';


function Banner() {
    return (
        <>
            <div className="home-banner">
                <h3 className='banner-heading'>Find your Home</h3>
                <div className="banner-content">
                    <div className="banner-btn-content">
                        <button className='banner-btn btn'>Residential</button>
                        <button className='banner-btn active btn'>Ready property</button>
                        <button className='banner-btn btn'>Off-Plan</button>
                    </div>
                    <div className="banner-form-key-content">
                        <form action="" className='banner-key'>
                            <input type="text" className='banner-key-input' placeholder='Key words' />
                            <div className="banner-search">
                                <img className='search' src={search} alt='' />
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Banner