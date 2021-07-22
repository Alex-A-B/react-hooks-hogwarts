import React, { useState }from "react";
import Nav from "./Nav";
import HogHolder from "./HogHolder";
import HogFilter from "./HogFilter";
import HogSorter from "./HogSorter";
import hogs from "../porkers_data";

function App() {

// const [displayHogs, setDisplayHogs] = useState(hogs);
const [filterBy, setFilterBy] = useState("All");
const [sortBy, setSortBy] = useState("name");

function handleFilterChange(e) {
  setFilterBy(e.target.value)
}
function handleSortChange(e) {
  setSortBy(e.target.value)
}

const hogsToSort = hogs.filter((hog) => {
    if (filterBy === "All") {
      return true
    } 
      return hog.greased.toString() === filterBy
    })

const hogsToDisplay = hogsToSort.sort((a, b) => {
  if (sortBy.toString() === "name") {
      return a.name.toLowerCase() - b.name.toLowerCase()
  }   return a.weight - b.weight
})

  return (
    <div className="App">
      <Nav />
      <HogFilter handleFilterChange={handleFilterChange}/>
      <HogSorter handleSortChange={handleSortChange} />
      <HogHolder hogs={hogsToDisplay} />
    </div>
  );
}

export default App;
