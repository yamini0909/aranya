import React from "react";
import Gym from '../images/image 2.jpg'
import Phone from '../images/smartphone 2.png'
const Premium = () => {
  const aranyaServices = {
    reception: {
      title: "RECEPTION",
      amenities: [
        "6 areas for receptionists serving 24/7",
        "Security team with 24/7 camera system",
        "Automatic fire extinguishing system",
      ],
    },
    parking: {
      title: "PARKING",
      amenities: ["Parking area with extra capacity"],
    },
    supermarket: {
      title: "SUPERMARKET",
      amenities: ["5 supermarkets in each block"],
    },
    security: {
      title: "SECURITY",
      amenities: ["Security team with 24/7 camera system"],
    },
    conferenceRoom: {
      title: "CONFERENCE ROOM",
      amenities: [
        "5 conference room setups in each block",
        "Ensure ventilation and air conditioning",
      ],
    },
    spaAndMassage: {
      title: "SPA AND MASSAGE",
      amenities: ["Spa and Massage service for better health"],
    },
    alarm: {
      title: "FIRE ALARM",
      amenities: ["Automatic fire extinguishing system"],
    },
    conditioning: {
      title: "CONDITIONING",
      amenities: ["Ensure ventilation and air conditioning"],
    },
    fourSeasonPool: {
      title: "4 SEASON POOL",
      amenities: ["5 star indoor swimming 4 seasons"],
    },
  };

  return (
    <div className="premium-cnt">
      <div >
        <h3 className="sub-heading-premium">ARANYA’S SERVICES</h3>
        <div className="prem-heading">30+ PREMIUM AMENTIES</div>
      </div>
      <div className="premium-container">
        {Object.entries(aranyaServices).map(([key, value]) => (
          <div key={key} className="service-item">
<div className="green-bg">
<img className="icon" src={Phone}/>
</div>
           
            <div className="details">
              <div className="value-prem">{value.title}</div>
              <ul className="small-prem">
                {Array.isArray(value.amenities) ? (
                  value.amenities.map((amenity, index) => (
                    <li  key={index}>{amenity}</li>
                  ))
                ) : (
                  <li>{value.amenities}</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <img className="gym" src={Gym}/>
    </div>
  );
};

export default Premium;
