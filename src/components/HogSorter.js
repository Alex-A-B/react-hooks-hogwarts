import React from "react";

function HogSorter({ handleSortChange }) {
    return (
        <div className="filterWrapper">
            <label>Sort your hogs by: </label>
            <select name="filter" onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
           </select>
        </div>
    )
}

export default HogSorter