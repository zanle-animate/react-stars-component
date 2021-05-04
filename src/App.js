import React from "react";
import "./App.css";
import ReactStars from "react-rating-stars-component";
import { Rating } from "./data/rating";

const rating = Rating;

const App = (newRating) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="app">
      <h1>React Stars Component</h1>
      {rating.map(({ rating, title, desc, price }, i) => (
        <div className="card" key={i}>
          <ReactStars
            // count={rating}
            value={rating}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            edit={false}
            isHalf={true}
            // color="#ffd700" si no hay calificacion, utiliza este color
            //         emptyIcon={<i className="far fa-star"></i>}
            // halfIcon={<i className="fa fa-star-half-alt"></i>}
            // fullIcon={<i className="fa fa-star"></i>}
          />
          <h2>{title}</h2>
          <p>{desc}</p>
          <pre>{price}</pre>
        </div>
      ))}
    </div>
  );
};

export default App;
