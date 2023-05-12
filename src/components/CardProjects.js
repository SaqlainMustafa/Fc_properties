import React from 'react'
import projecticon from '../assets/images/project-icon.png';
import location from '../assets/images/location-icon.png';
import areaicon from '../assets/images/area-icon.png';
import projectMblicon from '../assets/images/project-mbl.png';
import locationMbl from '../assets/images/location-mbl.png';
import areaMbl from '../assets/images/area-mbl.png';



function CardProjects() {
    return (
        <>
            <div className="card-project-container">
                <div className="container">

                    <div className="card-wrapper">
                        <div className="card">
                            <h3 className='card-projct-heading'>New <br />Projects</h3>
                            <button className='btn card-nmb-btn'>10</button>
                            <img className='project-card-icons' src={projecticon} alt='' />
                            <img className='project-card-mbl-icons' src={projectMblicon} alt='' />
                        </div>
                        <div className="card">
                            <h3 className='card-projct-heading'>Dubai Projects <br /> Map</h3>
                            <button className='btn card-nmb-btn'>56</button>
                            <img className='project-card-icons' src={location} alt='' />
                            <img className='project-card-mbl-icons' src={locationMbl} alt='' />
                        </div>
                        <div className="card mt-md-0 mt-5">
                            <h3 className='card-projct-heading'>Dubai <br />Areas</h3>
                            <button className='btn card-nmb-btn'>48</button>
                            <img className='project-card-icons' src={areaicon} alt='' />
                            <img className='project-card-mbl-icons' src={areaMbl} alt='' />
                        </div>
                        <div className="card mt-md-0 mt-5">
                            <h3 className='card-projct-heading'>Ready <br />Properties</h3>
                            <button className='btn card-nmb-btn'>1380</button>
                            <img className='project-card-icons' src={areaicon} alt='' />
                            <img className='project-card-mbl-icons' src={areaMbl} alt='' />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProjects