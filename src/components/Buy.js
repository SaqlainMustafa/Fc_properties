import React from 'react'
import LocateMapForm from './LocateMapForm'
import BannerArea from './BannerArea'
import Quiz from './Quiz'
import Places from './Places'
import FiveJbr from './FiveJbr'

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
const wrapStyle = {
	position: 'relative'
}

function Buy() {
	return (
		<>
			<BannerArea />
			<Places />
			<div className="map-wrapper-control" style={wrapStyle}>
				<LocateMapForm />
				<button className='btn' style={mapStyle}>Dubai Map</button>
			</div>
			<FiveJbr />
			<Quiz />
		</>
	)
}

export default Buy