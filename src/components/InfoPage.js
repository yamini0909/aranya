import React from "react";
import Rectangle1 from "../images/Rectangle 67.jpg";
import Rectangle3 from "../images/Rectangle 75.jpg";
import Rectangle4 from "../images/Rectangle 123.jpg";
import Rectangle2 from "../images/Rectangle 71.jpg";
import ValueData from "./ValueData";

const InfoPage = () => {
  const info = {
    location: {
      heading: "OUR APARTMENTS",
      text: "Presenting Piramal Aranya, a high rise gated sanctuary that offers luxuriant 2, 3 & 4 BHK homes inclusive of advanced wellness technologies, dual-aspect blue and green views and a world-class lifestyle crafted alongside the world’s leading partners at Rani Baug, Byculla, South Mumbai.",
      subHeading: "Mumbai",
      imageA: (
        <img src={Rectangle1} alt="Location" className="img-info imageA mb-none" />
      ),
      imageB: (
        <img src={Rectangle2} alt="Location" className="img-info imageB mb-none" />
      ),
    },
    property: {
      heading: "2BHK - EAST WING",
      text: [
        "All bedrooms with en-suite bathrooms",
        "Apartments with harbour views",
        "Master bedroom with corner windows offering panoramic views",
        "All shafts on the external face",
        "Kitchen with dry balcony",
        "Ease of combining apartments to create exclusive wing apartment with expansive living & dining area",
      ],
      subHeading: "2 BED  EXCLUSIVE RESIDENCES",
      imageA: <img src={Rectangle3} alt="Home" className="img-info imageA mb-none" />,
      imageB: (
        <img src={Rectangle4} alt="Home" className="img-info imageB-right mb-none" />
      ),
    },
  };

  const dataForComponentA = [
    { percentage: 50, text: 'Botanical garden views' },
    { percentage: 250, text: 'Mumbai harbour and botanical garden views' },
    { percentage: 9290, text: 'Custom View 1' },
    { percentage: 1200, text: 'Custom View 2' },
  ];

  return (
    <div className="info-cnt cnt">
      <div className="flex info-box">
        <div>
          {info.location.imageA}
          {info.location.imageB}
        </div>

        <div>
          <h3>{info.location.subHeading}</h3>
          <h1 className="info-heading">{info.location.heading}</h1>
          <p className="info-heading custom-info">{info.location.text}</p>
        </div>
      </div>
      <div className="flex info-box">
        <div className="mb-text">
          <h3 className="text-left">{info.location.subHeading}</h3>
          <h1 className="info-heading-right">{info.property.heading}</h1>
          <ul className="custom-info-left">
            {info.property.text.map((item, index) => (
              <li className="info-heading-right" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {info.property.imageA}
        {info.property.imageB}
      </div>
     <ValueData values={dataForComponentA} />
    </div>
  );
};

export default InfoPage;
