import React, { Fragment, useEffect, useState } from "react";
import "./index.css";
import Card from "../../components/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { movies } from "../../data";
import { FaPlus } from "react-icons/fa";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("http://localhost:3006/api/movies");
        setMovies(res.data);
      } catch (err) {
        console.log(err);
        alert("Something Went Wrong. Try Again Later");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="home-container">
      <div className="home-subcontainer">
        {movies.map((movie) => (
          <>
            <Fragment key={movie.id}>
              <Card movie={movie} />
            </Fragment>
          </>
        ))}
        <div className="home-icon-container">
          <Link to="/form">
            <div className="home-icon-subcontainer">
              <div className="home-icon-innercontainer">
                <FaPlus className="home-icon" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
