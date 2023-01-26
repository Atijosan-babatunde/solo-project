import React from "react";
// import firstpic from "./Images/firstpic.png";
import location from "./Images/location.png";
import "./style.css";


export default function Content(props) {
    
  return (
    <section>
      <div className="content">
      <div className="card">
        <img src={props.photo} alt="firstcardpic" className="card-image" />
      </div>
      <div className="text">
           <div className="card--stats">
                <img src={location} alt="location" className="location-img" />
                <span className="location-text">{props.location}</span>
                <span className="underline-text">View on Google Maps</span>
            </div>
        <h1 className="texth1">{props.country}</h1>
        <p className="textdate">{props.date}</p>
        <p className="textp">{props.details}
        </p>
      </div>
      </div>
      
      <hr />
    </section>
  );
}
