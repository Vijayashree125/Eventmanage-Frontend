import React from "react";
import './Aboutus.css';
import myImage from '../assets/profile.jpg';

const Aboutus = () => {
    return (
      <div class="hero-container" id="hero-sec">
      <div class="container-fluid ">
        <div class="row d-flex">
          <div class="col align-middle">
            <div class="px-2 py-2">
            <img src={myImage} class="img-fluid" alt="..."/>;
            </div>
          </div>
          <div class="col">
            <div class="px-5 py-5 mt-5">
              <div class="px-2 py-2 align-middle">
                <h4>Event Marketing</h4>
                <p> Event Marketing, Event promotion is an essential aspect of event management.</p>
              </div>
              <div class="px-2 py-2">
                <button type="button" class="btn btn-outline-primary">Checkout Our Courses</button>
              </div>
            </div>
          </div>
        </div>
      </div>
       </div>
    );
  };
  export default Aboutus;