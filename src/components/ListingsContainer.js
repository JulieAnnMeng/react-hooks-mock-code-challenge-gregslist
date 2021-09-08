import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingData, isLoaded, handleDelete, searchedListings}) {
  let data = listingData;
  // const listingSearch = listingData.filter(listing => {
  //   if(search !== "" && !listing.name.toLowerCase().includes(listingData.toLowerCase())){
  //     return false;
  //   }
  //   return true
  // });
  // console.log(searchedListings)

  if(!isLoaded) return <h3>Loading....</h3>

  if(searchedListings !== ""){data = searchedListings}

  const listingCards = data.map((listing) => {
    // console.log(listing)
    return (
      <ListingCard 
        key={listing.id}
        id={listing.id}
        img={listing.image}
        description={listing.description}
        location={listing.location}
        handleDelete={handleDelete}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
