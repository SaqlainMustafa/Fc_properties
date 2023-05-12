import React from 'react'
import flagImg from '../assets/images/input-flag.png';
import arrowDown from '../assets/images/arrow-down.png';
import logo from '../assets/images/logo.png';
import consultationImg from '../assets/images/consultation-img.png';



function Consultation() {
    return (
        <>
            <div className="consultation-container">
                <div className="container">
                    <div className="consultation-wrapper">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="consultation-left">
                                    <div className="consultation-left-content">
                                        <h3 className="consultation-heading">Получить консультацию</h3>
                                        <p className='consultation-text'>От наших агентов по любому интересующему вас вопросу</p>
                                        <form action="" className='consultation-form'>
                                            <input type="text" placeholder='Ваше Имя' className='consultation-input' />
                                            <div className='consultation-input-content'>
                                                <input type="text" placeholder='+7 (999) 999-99-99' className='consultation-input consultation-phone-input' />
                                                <img className='flag-img' src={flagImg} alt='' />
                                                <img className='arrow-img' src={arrowDown} alt='' />
                                            </div>
                                            <input type="email" placeholder='E-mail' className='consultation-input' />
                                            <button className="get-concultation-btn">Получить консультацию</button>
                                        </form>
                                    </div>
                                    <div className="consultation-bottom d-flex align-items-center">
                                        <img className='logo-img' src={logo} alt='' />
                                        <p className='consultation-bottom-text'>город Дубай улица Bay Square 13 здания, 704</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="consultation-right">
                                    <img className='consultation-img' src={consultationImg} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Consultation