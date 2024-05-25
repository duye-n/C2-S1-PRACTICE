
export const cardData = [
  {
    id: 1,
    image: "image1.jpg",
    name: "John Doe",
    hobbies: ["Reading", "Painting"],
    gender: "Male",
    address: "123 Main St",
    price: "$50",
  },
  {
    id: 2,
    image: "image2.jpg",
    name: "Jane Smith",
    hobbies: ["Running", "Cooking"],
    gender: "Female",
    address: "456 Elm St",
    price: "$70",
  },

];



import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.image} alt="Avatar" />
      <h2>{card.name}</h2>
      <p>Hobbies: {card.hobbies.join(", ")}</p>
      <p>Gender: {card.gender}</p>
      <p>Address: {card.address}</p>
      <p>Price: {card.price}</p>
    </div>
  );
};

export default Card;




import React from "react";
import Card from "./Card";
import { cardData } from "./data";

const App = () => {
  return (
    <div id="app">
      <h1>Card List</h1>
      <div className="card-list">
        {cardData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
