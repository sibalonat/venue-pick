import React, { useState } from "react"
import Venue from "./Venue.jsx";

function Venues(props) {
    const [data, setData] = useState('');
    const { venues } = props;
    // console.log(venues);
    const venuesNum = venues.length;
    const openVenue = (e) => {
        setData(e.target.childNodes[0].innerText)

        console.log(data);
        // console.log(e.target.childNodes[0].innerText);
        
    }


    return (
        <div className="w-1/2 mx-auto">
            {venuesNum > 0 && venues.map((venue, index) => {
                return (
                    <div key={index}>
                        <p className="text-2xl border-b-2" onClick={openVenue}>
                            <span className="text-base mr-8">{index + 1}</span>
                            .{venue.name}
                        </p>
                        <Venue key={index} index={index} parentToChild={data} venue={venue} />
                    </div>
                )
            })}
        </div>
    )

}

export default Venues