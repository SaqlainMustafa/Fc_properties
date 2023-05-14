import React from 'react'
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function HomeFooter() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-wrapper d-flex justify-content-between">
                        <div className="footer-content pe-5">
                            <h4 className='footer-heading'>Head Office</h4>
                            <p className='footer-address'>Dubai, Business Bay, Bay Square, Building 13 - Dubai</p>
                        </div>
                        <div className="footer-content mt-md-0 mt-5 pe-5">
                            <h4 className='footer-heading'>Call us</h4>
                            <p className='footer-nmb'>+971 58 807 0001</p>
                        </div>
                        <div className="footer-content mt-md-0 mt-5">
                            <h4 className='footer-heading'>Email us</h4>
                            <p className='footer-email'>info@fcproperties.ae</p>
                            <div className="footer-social-content">
                                <a href='/' target='_blank' className="footer-social">
                                    <GrFacebookOption className='social-icon' />
                                </a>
                                <a href='/' target='_blank' className="footer-social">
                                    <AiOutlineInstagram className='social-icon' />
                                </a>
                                <a href='/' target='_blank' className="footer-social">
                                    <AiFillYoutube className='social-icon' />
                                </a>
                                <a href='/' target='_blank' className="footer-social">
                                    <AiOutlineTwitter className='social-icon' />
                                </a>
                                <a href='/' target='_blank' className="footer-social">
                                    <FaLinkedinIn className='social-icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-menu-wrapper">
                    <div className="container">
                        <div className="footer-menu-content">
                            <ul className='footer-list p-0 mb-0'>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">New</a></li>
                                <li><a href="/">Projects</a></li>
                                <li><a href="/">Buy</a></li>
                                <li><a href="/">Rent</a></li>
                                <li><a href="/">Sell</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default HomeFooter