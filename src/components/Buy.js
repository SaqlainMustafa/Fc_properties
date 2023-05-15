import React from 'react'
import LocateMapForm from './LocateMapForm'
import BannerArea from './BannerArea'
import Quiz from './Quiz'
import Places from './Places'
import FiveJbr from './FiveJbr'
import MapButtons from './MapButtons'

// const mapStyle = {
// 	fontSize: '15px',
// 	backgroundColor: '#163F8E',
// 	padding: '10px 47px',
// 	borderRadius: '11px',
// 	position: 'absolute',
// 	color: 'white',
// 	fontWeight: '700',
// 	textTransform: 'uppercase',
// 	top: '-21px',
//     left: '50%',
//     transform: 'translate(-50%)'
// }
// const wrapStyle = {
// 	position: 'relative'
// }

function Buy() {
	return (
		<>
			{/* Off Plan List Page */}
			<BannerArea />
			<Places />
			<div className="map-wrapper-control">
				<LocateMapForm />
				<MapButtons />
			</div>
			<FiveJbr />
			<Quiz />
		</>
	)
}

export default Buy