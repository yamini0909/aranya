import React from "react";

const Surrounding = () => {
  return (
    <div className="surrounding-cnt cnt">
      <div className="surround-custom-width">
        <h1 className="font-newyork">
          SPECTACULAR SURROUNDINGS AS FAR AS THE EYE CAN SEE
        </h1>
        <p className="grey-text">
          Piramal Aranya is an ode to perfection. It balances contemporary
          design with the scenic natural beauty of its environment. Every
          residence invites you to soak in the surroundings, from the endless
          greenery of Rani Baug on the western side and the shimmering Arabian
          Sea on the east. Avyan at Piramal Aranya will be home to something
          truly spectacular with premium dual aspect living
        </p>
      </div>
      <div className="value flex">
        <div className="value1">
          <h2 className="value-heading">66%</h2>
          <p className="value-text"> Botanical garden views</p>
        </div>
        <div className="value3">
          <h2 className="value-heading">33%</h2>
          <p className="value-text">
            Mumbai harbour and botanical garden views
          </p>
        </div>
        <div className="value2">
          <h2 className="value-heading">66%</h2>
          <p className="value-text"> Mumbai harbour views</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="location">
        <div className="heading">
          <h3 className="location-subhead">Location</h3>
          <h1>NEIGHBORHOOD</h1>
        </div>
        <div className="flex location-center">
          <div className="location1-left">
            <div className="location1 flex">
              <div className="border-dot">
                <div className="dot1"></div>
              </div>

              <div className="location-text flex">
                <div className="location-heading">Bhau Daji Lad Museum</div>
                <div className="location-subheading">3.5 Km Away</div>
              </div>
            </div>
            <div className="location1 flex">
              <div className="border-dot">
                <div className="dot1"></div>
              </div>
              <div className="location-text flex">
                <div className="location-heading">Magen David Synagogue</div>
                <div className="location-subheading">3.5 Km Away</div>
              </div>
            </div>
          </div>

          <div className="location-right">
            <div className="location1 flex">
              <div className="border-dot">
                <div className="dot1"></div>
              </div>
              <div className="location-text flex">
                <div className="location-heading">St. Paul’s Tamil Church</div>
                <div className="location-subheading">3.5 Km Away</div>
              </div>
            </div>
            <div className="location1 flex">
              <div className="border-dot">
                <div className="dot1"></div>
              </div>
              <div className="location-text flex">
                <div className="location-heading">
                  Byculla Club − Fire Temple
                </div>
                <div className="location-subheading">3.5 Km Away</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surrounding;
