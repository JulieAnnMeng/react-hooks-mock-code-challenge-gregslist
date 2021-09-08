import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingData, setListingData] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchedListings, setSearchListings] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((response) => response.json())
    .then(listings => {
      setListingData(listings)
      setIsLoaded(true);
    })
    .catch(error => console.error("fetching error: ", error))
  }, []);

  if(!isLoaded) return <h3>Loading....</h3>

  function handleDelete(e) {
    const id=e.target.id
    
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => {
      const newListingData = listingData.filter((listing) => listing.id !== id);
      setListingData(newListingData)
    })
  }

  function handleSearch(search) {
    if(isLoaded) {
    const searching = listingData.filter(listing => {
      if(search !== "" & !listing.description.toLowerCase().includes(search.toLowerCase())){
        return false;
      }
      return true
    })
    setSearchListings(searching)
  }}

  return (
    <div className="app">
      <Header  
      handleSearch={handleSearch} 
      />

      <ListingsContainer 
      listingData={listingData} 
      isLoaded={isLoaded} 
      handleDelete={handleDelete} 
      searchedListings={searchedListings}
      />
    </div>
  );
}

export default App;
