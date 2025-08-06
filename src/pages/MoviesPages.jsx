import React from "react";
import Movies from "../Data/Movies";
import Card from "../Components/Card"; // ✅ Make sure this path is correct

const MoviesPages = () => {
  return (
    <div className="app-container">
      <div>
        <h1>NOW SHOWING</h1>
      </div>
      <div>
        {Movies.map((item, i) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            director={item.director}
            release={item.release}
            image={item.image}
          />
        );
      })}
      </div>
      
    </div>
  );
};

export default MoviesPages;
