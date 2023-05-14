import React from 'react'
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className='footer-heading'>Developers in Dubai</h3>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-6 col-6">
                                        <ul className='footer-list'>
                                            <li className='footer-item'><a href="/" className='footer-link'>Emaar</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Meraas</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>DAMAC</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Dubai Properties</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Select Group</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <ul className='footer-list'>
                                            <li className='footer-item'><a href="/" className='footer-link'>Sobha</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Azizi</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Omniyat</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Ellington</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Nakheel</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-md-0 mt-4">
                            <h3 className='footer-heading'>Popular Areas in Dubai</h3>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-6 col-6">
                                        <ul className='footer-list'>
                                            <li className='footer-item'><a href="/" className='footer-link'>Downtown Dubai</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Dubai Hills Estate</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Dubai Creek Harbour</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Emaar Beachfront</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Arabian Ranches</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <ul className='footer-list'>
                                            <li className='footer-item'><a href="/" className='footer-link'>Emaar South</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Dubai Marina</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>Palm Jumairah</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>DAMAC Hills</a></li>
                                            <li className='footer-item'><a href="/" className='footer-link'>JBR</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-md-0 mt-4">
                            <h3 className='footer-heading'>Properties</h3>
                            <ul className='footer-list'>
                                <li className='footer-item'><a href="/" className='footer-link'>Apartments in Dubai</a></li>
                                <li className='footer-item'><a href="/" className='footer-link'>Townhouses in Dubai</a></li>
                                <li className='footer-item'><a href="/" className='footer-link'>Villas in Dubai</a></li>
                                <li className='footer-item'><a href="/" className='footer-link'>Building in Dubai</a></li>
                                <li className='footer-item'><a href="/" className='footer-link'>Buy Property for Bitcoin</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 mt-md-0 mt-4">
                            <h3 className='footer-heading'>About Us</h3>
                            <ul className='footer-list'>
                                <li className='footer-item'><a href="/" className='footer-link'>Virtual 3600 Tours</a></li>
                                <li className='footer-item'><a href="/" className='footer-link'>Video Overviews</a></li>
                                <li className='footer-item'><a href="/" className='footer-link'>Real Estate Blog</a></li>
                                <li className='footer-item'><a href="/" className='footer-link'>Dubai`s FAQ</a></li>
                                <li className='footer-item'><a href="/" className='footer-link'>Mortgage in Dubai</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-social-content">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <p className='footer-member-text'>Join to Over 6000 Members to Get Weekly Updates</p>
                            </div>
                            <div className="col-md-5 mt-md-0 mt-3">
                                <ul className='footer-social-list'>
                                    <li className='footer-social-item'><a href="/" className='footer-link'><GrFacebookOption className='social-icon' /></a></li>
                                    <li className='footer-social-item'><a href="/" className='footer-link'><AiOutlineInstagram className='social-icon' /></a></li>
                                    <li className='footer-social-item'><a href="/" className='footer-link'><AiFillYoutube className='social-icon' /></a></li>
                                    <li className='footer-social-item'><a href="/" className='footer-link'><AiOutlineTwitter className='social-icon' /></a></li>
                                    <li className='footer-social-item'><a href="/" className='footer-link'><FaLinkedinIn className='social-icon' /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer