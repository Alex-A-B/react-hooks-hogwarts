import React from "react";
import HogTile from "./HogTile";


function HogHolder( { hogs }) {
      
    const renderHogs = hogs.map((hog) => {
        return <HogTile 
            key={hog.name}    
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            medal={hog["highest medal achieved"]}
            weight={hog.weight}
            image={hog.image}
            />
    })

    return (  
        <div className="ui grid container">
             {renderHogs}       
        </div>
    )
}

export default HogHolder