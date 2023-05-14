import React from 'react'
function PropertyMap() {
	const mapStyle = {
		width: '100%',
		height: '508px'
	  };
	return (
		<>
			<div className="property-map-container">
				<div className="map">
					<iframe className='property-map' style={mapStyle} title="This is a map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828304578!2d54.89781466032875!3d25.076280445637604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1683637172902!5m2!1sen!2s" loading="lazy" />
				</div>
			</div>
		</>
	)
}

export default PropertyMap