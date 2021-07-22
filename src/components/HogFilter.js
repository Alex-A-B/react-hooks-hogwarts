import React from "react";
function HogFilter( { handleFilterChange } ) {
    return (
        <div className="filterWrapper">
            <label>How would you like your Hogs? </label>
            <select name="filter" onChange={handleFilterChange}>
                <option value="All">All of 'em</option> 
                <option value="true">Greased</option>
                <option value="false">Ungreased</option>
           </select>
        </div>
    )
}

export default HogFilter