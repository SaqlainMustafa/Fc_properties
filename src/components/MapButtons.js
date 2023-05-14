import React from 'react'

function MapButtons() {
    const mapStyle = {
        fontSize: '15px',
        backgroundColor: '#163F8E',
        padding: '10px 47px',
        borderRadius: '11px'
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