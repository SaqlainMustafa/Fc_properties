import React from 'react'

function MapButtons() {
	const mapStyle = {
		fontSize: '15px',
		backgroundColor: '#163F8E',
		padding: '10px 47px',
		borderRadius: '11px',
		position: 'absolute',
		color: 'white',
		fontWeight: '700',
		textTransform: 'uppercase',
		top: '-21px',
		left: '50%',
		transform: 'translate(-50%)'
	}
	return (
		<>
			<div className="map-button">
				<button className='btn' style={mapStyle}>Dubai Map</button>
			</div>
		</>
	)
}

export default MapButtons