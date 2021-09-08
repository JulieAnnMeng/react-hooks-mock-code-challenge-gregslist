import React, { useState } from "react";

function ListingCard({id, img, description, location, handleDelete}) {
  
  const[button, setButton] = useState({id, star: false})

  function handleStarButton(e) {
    const star = !button.star
    setButton({...button, star})
  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={img} alt={"description"} />
      </div>
      <div className="details">
        {button.star === true ? (
          <button className="emoji-button favorite active" onClick={handleStarButton} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleStarButton} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" id={id} onClick={handleDelete} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
