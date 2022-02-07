import React from "react";
import Products from "../Products/Products";
import './Home.css'

const Home = () => {
  return (
    <div className="home-card">
    <div className="card bg-dark text-white border-0">
      <img src="/assets/pexels-pixabay-46244.jpg" className="card-img" alt="background" height="550px"/>
      <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-3 ">New Season Arrivals</h5>
        <p className="card-text">
          The new season is coming
        </p>
        <p className="card-text">Last updated 3 mins ago</p>
          </div>
        
      </div>
    </div>
    <Products />
  </div>
  )
};

export default Home;
