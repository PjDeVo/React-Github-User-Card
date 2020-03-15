import React from "react";

function Card({ name, bio, user, image }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} className="card-image" />
        <div class="container">
          <h2>Name: {name} </h2>
          <h4>
            Username: <b> {user}</b>{" "}
          </h4>
          <p> {bio} </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
