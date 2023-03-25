import React, { useState } from "react";

function Hog( {hog} ) {

    const [displayInfo, setInfoDisplay] = useState(false)
    
    function handleClick() {
        setInfoDisplay(!displayInfo)
    }

    function populateInfoSection() {
        return (
            <div>
                <h2>{hog.specialty}</h2>
                <h2>{hog.weight} lbs</h2>
                <>{hog.greased ? 'greasy' : 'not greasy'}</>
            </div>
        )
    }


    return (
        <div>
            <h1 onClick = {handleClick}>{hog.name}</h1>
            <>{displayInfo ? populateInfoSection() : null}</>
            <img src={hog.image} alt = {`This is ${hog.name}`} />
        </div>
    )
}

export default Hog;