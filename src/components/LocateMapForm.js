import React from 'react'
import PropertyMap from './PropertyMap'
import PropertyForm from './PropertyForm'

function LocateMapForm() {
	return (
		<>
			<div className="locate-map-banner">
				<PropertyMap />
				<PropertyForm />
			</div>
		</>
	)
}

export default LocateMapForm