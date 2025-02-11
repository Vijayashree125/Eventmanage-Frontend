import React from "react";
import myevent from '../assets/evtmng1.jpg';
import myimage from '../assets/events1.jpg';
import myimageevent from '../assets/evtmng3-jpg.jpg';
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
                <h5 class="card-title">Venue selection</h5>
                <p class="card-text">Venue Selection - For in-person and hybrid events, it's important to select the right venue. Work with your team to finalize a venue that offers the space .</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" >
              <img src={myimage} class="img-fluid" alt="..." />;
              <div class="card-body">
                <h5 class="card-title">Event communication</h5>
                <p class="card-text">In event management, you have to create an event where contacts are well-managed and have space for genuine communication. During an event, attendees appreciate. </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" >
              <img src={myimageevent} class="img-fluid" alt="..." />;
              <div class="card-body">
                <h5 class="card-title">Event budgeting</h5>
                <p class="card-text">Budgeting and Financial Management. In many ways, the budgeting of event management is the most important part.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;