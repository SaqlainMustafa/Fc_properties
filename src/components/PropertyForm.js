import React, { useState } from 'react'
import searcIcon from '../assets/images/search-icon.png';


function PropertyForm() {
	const [myProperty, setMyProperty] = useState("Where To?");
	const [myDeveloper, setMyDeveloper] = useState("Where To?");
	const [myArea, setMyArea] = useState("Where To?");
	const [myLife, setMyLife] = useState("Where To?");
	const [myMinPrice, setMyMinPrice] = useState("Where To?");
	const [myMaxPrice, setMyMaxPrice] = useState("Where To?");

	const propertyTypes = (event) => {
		setMyProperty(event.target.value)
	}
	const propertyDevelopers = (event) => {
		setMyDeveloper(event.target.value)
	}
	const propertyAreas = (event) => {
		setMyArea(event.target.value)
	}
	const propertyLifestyle = (event) => {
		setMyLife(event.target.value)
	}
	const propertyMinPrice = (event) => {
		setMyMinPrice(event.target.value)
	}
	const propertyMaxPrice = (event) => {
		setMyMaxPrice(event.target.value)
	}
	return (
		<>
			<div className="property-form-container">
				<div className="container">
					<form action="" className='property-form-wrapper'>
						<div className="property-form-content-1">
							<div className="property-form">
								<select className='property-form-select' value={myProperty} onChange={propertyTypes}>
									<option value="Where To?">All Property Types</option>
									<option value="Dubai">Dubai</option>
									<option value="Canada">Canada</option>
									<option value="United Kingdom">United Kingdom</option>
									<option value="Australia">Australia</option>
									<option value="America">America</option>
								</select>
							</div>
							<div className="search-project">
								<input type="search" className='search-project-input' placeholder='Search Project Name' />
							</div>
							<div className="property-form property-find">
								<img className='slide-partner-img' src={searcIcon} alt='' />
								<button type='submit' className='btn find-btn'>Find</button>
							</div>
						</div>
						<div className="property-form-content-2">
							<div className="property-form">
								<select className='property-form-select' value={myDeveloper} onChange={propertyDevelopers}>
									<option value="Where To?">All Developers</option>
									<option value="Dubai">Dubai</option>
									<option value="Canada">Canada</option>
									<option value="United Kingdom">United Kingdom</option>
									<option value="Australia">Australia</option>
									<option value="America">America</option>
								</select>
							</div>
							<div className="property-form property-col">
								<select className='property-form-select' value={myArea} onChange={propertyAreas}>
									<option value="Where To?">All Areas</option>
									<option value="Dubai">Dubai</option>
									<option value="Canada">Canada</option>
									<option value="United Kingdom">United Kingdom</option>
									<option value="Australia">Australia</option>
									<option value="America">America</option>
								</select>
							</div>
							<div className="property-form property-col">
								<select className='property-form-select' value={myLife} onChange={propertyLifestyle}>
									<option value="Where To?">All Lifestyle Types</option>
									<option value="Dubai">Dubai</option>
									<option value="Canada">Canada</option>
									<option value="United Kingdom">United Kingdom</option>
									<option value="Australia">Australia</option>
									<option value="America">America</option>
								</select>
							</div>
							<div className="property-form property-col">
								<select className='property-form-select' value={myMinPrice} onChange={propertyMinPrice}>
									<option value="Where To?">Min. Price</option>
									<option value="Dubai">Dubai</option>
									<option value="Canada">Canada</option>
									<option value="United Kingdom">United Kingdom</option>
									<option value="Australia">Australia</option>
									<option value="America">America</option>
								</select>
							</div>
							<div className="property-form property-col">
								<select className='property-form-select' value={myMaxPrice} onChange={propertyMaxPrice}>
									<option value="Where To?">Max. Price</option>
									<option value="Dubai">Dubai</option>
									<option value="Canada">Canada</option>
									<option value="United Kingdom">United Kingdom</option>
									<option value="Australia">Australia</option>
									<option value="America">America</option>
								</select>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default PropertyForm