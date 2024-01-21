import React from 'react';
import LocationImage from "../images/location (1) 1.png"
import HomeImage from "../images/home 1.png"
import RupeeImage from "../images/rupee (4) 1.png"

const SearchConfig = () => {
  const data = {
    location: {
      heading: "Location",
      subHeading: "South Mumbai",
      icon: LocationImage
    },
    property: {
      heading: "Property",
      subHeading: "2BHK",
      icon: HomeImage
    },
    budget: {
      heading: "Budget",
      subHeading: "90L - 1.5Cr",
      icon: RupeeImage
    }
  };

  return (
    <div className='search-config-cnt'>
      <h2 className='search-heading'>Search your configuration</h2>
      <div className='search-config-box flex'>
        {Object.keys(data).map((key) => (
          <div key={key} className='flex box-green'>
            <div className='item-cnt'>
            <div className='bg-green'> <img src={data[key].icon} alt={data[key].heading} /></div>
             
              <div>
                <h3 className='grey-small'>{data[key].heading}</h3>
                <h2 className='grey-large'>{data[key].subHeading}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchConfig;
