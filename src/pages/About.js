import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic_name.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
        <div className="centered">
        <img 
        className="profile_image"
        src={profile_pic}
        alt="Profile Pic"
        ></img>
        </div>
        </div>
        <div className="split right">
        <div className="centered">
        <div className="name_title">Tiffany Widjaja</div>
          <div className="brief_description">
          <p>Computer Science Major at Virginia Tech. </p>
          <p>I am part of the Marching Virginians as an Alto Sax, 
          interning a the Virginia Tech National Security Institute, 
          along with being in the CACI Research Fellowship Program </p>
          </div>
        </div>
        </div>
        </div>

    )
  }
}