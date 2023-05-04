import React, { useState } from "react";
import "./index.css";
// import { FaRegStar, FaStar } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form() {
  // const stars = [0, 1, 2, 3, 4];

  const [input, setInput] = useState({ name: "", rating: 0, releasedDate: "" });

  const [error, setError] = useState({
    name: "",
    rating: "",
    releasedDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  // const handleStars = (index) => {
  // console.log(index);
  // if (stars.findIndex((_, i) => i === index)) return console.log("true");
  // else return console.log("false");
  // };

  const handleError = (e) => {
    const { name, value } = e.target;
    if (value === "")
      return setError((prev) => ({ ...prev, [name]: `Please Enter ${name}` }));
    if (name === "rating" && (value > 6 || value < 0))
      return setError((prev) => ({
        ...prev,
        [name]: "Rating Should be between 0 to 5",
      }));
    else return setError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (Object.values(input).every((value) => value !== "")) {
        const res = await axios.post("http://localhost:3006/api/movies", input);
        alert("Uploaded Successfully");
        navigate("/");
      } else {
        setError({
          name: "Please Enter Movie Name",
          rating: "Please Enter Rating",
          releasedDate: "Please Enter Released Date",
        });
      }
    } catch (err) {
      console.log(err);
      alert("Something Went Wrong. Try Again Later.");
    }
  };

  return (
    <form className="form-container">
      <div className="form-subcontainer">
        <div className="form-innercontainer">
          <div className="form-input-container">
            <label className="form-label" htmlFor="name">
              Movie Name :
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              onChange={handleChange}
              onBlur={handleError}
            />
            <p className="form-error">{error.name}</p>
          </div>

          <div className="form-input-container">
            <label className="form-label" htmlFor="rating">
              Rating :
            </label>
            <input
              type="number"
              name="rating"
              id="rating"
              className="form-input"
              onChange={handleChange}
              onBlur={handleError}
            />
            <p className="form-error">{error.rating}</p>
            {/* {stars.map((star, index) => (
            <FaRegStar
              key={index}
              className="form-icon"
              onClick={() => handleStars(index)}
            />
          ))} */}
          </div>

          <div className="form-input-container">
            <label className="form-label" htmlFor="releasedDate">
              Released Date :
            </label>
            <input
              type="text"
              name="releasedDate"
              id="releasedDate"
              placeholder="DD/MM/YYYY"
              className="form-input"
              onChange={handleChange}
              onBlur={handleError}
              s
            />
            <p className="form-error">{error.releasedDate}</p>
          </div>
          <div className="form-button-container">
            <button className="form-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
