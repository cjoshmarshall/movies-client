import React from "react";
import "./index.css";
import { FaStar } from "react-icons/fa";

function Card({ movie }) {
  let stars = [];
  for (let i = 0; i < movie.rating; i++) {
    stars.push(i);
  }
  return (
    <>
      <div className="card-container">
        <div className="card-subcontainer">
          <div className="card-innercontainer">
            <span>Movie : </span>
            <h2 className="card-name">{movie.name}</h2>
          </div>
          <div className="card-innercontainer">
            <span>Rating : </span>
            {stars.map(() => (
              <FaStar style={{ color: "white" }} className="card-rating" />
            ))}
          </div>
          <div className="card-innercontainer">
            <span>Released Date : </span>
            <p className="card-date">{movie.releasedDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
