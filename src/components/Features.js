import React from "react";
import myevent from '../assets/evtmng1.jpg';
import './Features.css';


const Features = () => {
  return (
    <div class="card-container bg-black" id="team">
      <div class="container-fluid px-3 py-3">
        <div class="row center mx-4 my-4 text-white">
          <h2>Meet Our Expert</h2>
          <p>Highly professional team</p>
        </div>
        <div class="row mb-5">
          <div class="col">
            <div class="card" >
              <img src={myevent} class="img-fluid" alt="..." />;
              <div class="card-body">
                <h5 class="card-title">Martina doena</h5>
                <p class="card-text">Highly proficient in Web3 and AI and professional in Designing Websites with tools of Web3.0.</p>
                {/* <a href="#" class="btn org-btn">Learn More.</a> */}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" >
              <img src={myevent} class="img-fluid" alt="..." />;
              <div class="card-body">
                <h5 class="card-title">Zaid S.</h5>
                <p class="card-text">A professional web designer with a wealth of knowledge about the web Development and Software Development. </p>
                {/* <a href="#" class="btn org-btn">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" >
              <img src={myevent} class="img-fluid" alt="..." />;
              <div class="card-body">
                <h5 class="card-title">Jhon Doe</h5>
                <p class="card-text">Expert in all aspects of coding and knowledgeable about a wide range of coding languages</p>
                {/* <a href="#" class="btn org-btn">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;