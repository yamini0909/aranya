import React from "react";
import './styles.css'
import MainBlack from '../images/Untitled-3 1.png'
import LandingPage from '../images/landingpage.jpg'
const MainPage = () => {
  return (
    <div className="main-cnt-body">
      <header>
        <div className="flex justify-between align-center">
            <div><img src={MainBlack}/></div>
            <div className="number">+91-8197883993</div>
        </div>
      </header>
      <div className="box flex">
        <div className="img-cnt-box">
            <img className="box-img" src={LandingPage}/>
        </div>
        <div className="box-cover">
        <div className="box-form">
            <div className="large-font">Thanks for registering! </div>
            <div className="medium-font">Our experts will get in touch with you shortly</div>
            <div className="btn">Back to Homepage</div>
        </div>
        </div>
       
      </div>
      <footer>
        <div className="text-heading">Disclamer</div>
        <div className="text">
          This is not the official website of developer, it belongs to the
          authorised channel partner for information & marketing purposes only.
          All rights for logo & images are reserved by the developer.
        </div>
        <div className="text">
        Digital Media planned by <span>Propacity</span>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
