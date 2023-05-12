import React from 'react'
import quizImg from '../assets/images/quiz-img.png';
import tick from '../assets/images/tick.png';
import { AiOutlineClockCircle } from 'react-icons/ai';


function Quiz() {
    return (
        <>
            <div className="quiz-section">
                <div className="container">
                    <div className="quiz-wrapper">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <div className="quiz-left">
                                    <img className='project-card-icons w-100' src={quizImg} alt='' />
                                </div>
                            </div>
                            <div className="col-md-7 p-lg-0 p-4">
                                <div className="quiz-right">
                                    <h3 className='quiz-heading'>Got Confused? Complete A Quiz & Get The Best Offers</h3>
                                    <div className="quiz-text">
                                        <p>Being qualified property experts with years of experience, we realize how confusing Dubai’s off-plan property market could be for new buyers, as well as for professional investors. Especially when there are thousands of off-plan properties in Dubai.</p>
                                        <p>You won’t need to look through countless listings on other the UAE's property websites. We have gathered all available information about off-plan property in one place and created a short quiz for you to find your perfect home in less than two minutes.</p>
                                        <p>Follow simple steps on the screen to get your personal selection of projects that meet all your requirements. Explore any project in Dubai relevant to you and contact us!</p>
                                    </div>
                                    <div className="quiz-content d-flex align-items-center">
                                        <a href="/" className='take-quiz-btn'>Take A Quick Test</a>
                                        <span className='quiz-time d-flex align-items-center'><AiOutlineClockCircle className='me-2' />It takes less than 2 minutes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tick-box">
                            <img className='project-card-icons' src={tick} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz