import React from 'react'

function Venue(props) {
    const { venue, index, parentToChild } = props;
    const inter = Number(parentToChild - 1)
    return (
        <div style={inter === index ? { display: 'block' } : { display: 'none' }}>
            {venue.location.formatted_address ? <p className='text-base'> <span className="text-sm mr-8"> Address: </span> {venue.location.formatted_address}</p> : null}

            {venue.location.region ? <p className='text-base'> <span className="text-sm mr-9"> Region: </span>{venue.location.region}</p> : null}
        </div>
    )
}

export default Venue