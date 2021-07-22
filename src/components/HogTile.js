import React, { useState } from "react";

function HogTile( { name, specialty, greased, weight, image, medal}) {
    
    const [extraInfo, setExtraInfo] = useState("false")

    function handleExtraInfo() {      
               setExtraInfo(!extraInfo)         
            }

    if (!extraInfo) {
        return (
            <div className="ui eight wide column pigTile" onClick={handleExtraInfo}>
                <ul className="hoggyText">
                    <li>Specialty: {specialty}</li>
                    <li>Weight: {weight}</li>
                    <li>Greased: {greased ? "Yes" : "No"}</li>
                    <li>Highest Medal Achieved: <span className="achievementText">{medal}</span></li>
                </ul>
            </div>
        )}   
        return (
            <div className="ui eight wide column pigTile hoggyText" onClick={handleExtraInfo}>
                Name: {name}
                <img src={image} alt={name} width="100%" />
                </div>
        )
}

export default HogTile