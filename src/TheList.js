import React from 'react'
import VenueList from './VenueList'

const TheList = (props) => {
    return (
        <ul className="list-unstyled"> 
        { /* dynamically renders the list-items based on the venue ID and name */ } 
            {props.venues && props.venues.map((element, index) => ( 
                    <VenueList 
                    key = {index} 
                    {...element}
                    sideBarClick={props.sideBarClick}
                    /> 
                ))}
        </ul>
    )
}

export default TheList;