import React from 'react';
import  Image1 from '../images/Rectangle 75.jpg';
import  Image2  from '../images/Rectangle 72.jpg';
import  Image3  from '../images/Rectangle 73.jpg';
import  Image4  from '../images/Rectangle 74.jpg';
const YourComponent = () => {
  const data = {
    1: {
      heading: 'Top Class Club & Facilities',
      description: 'With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.',
      imageUrl: Image1
    },
    2: {
      heading: 'Tower Exclusive Amenities & Facilities',
      description: 'With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.',
      imageUrl: Image2
    },
    3: {
      heading: 'Recreational Amenities & Facilities',
      description: 'With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.',
      imageUrl: Image3
    },
    4: {
      heading: 'Multipurpose Games Room',
      description: 'With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.',
      imageUrl: Image4
    }
  };

  return (
    <div className='adv-cnt cnt'>
    <h3>THE ADVANTAGES</h3>
    <h1>
    AMENITIES
    </h1>
 <div className="data-container">
      {Object.keys(data).map((key, index) => (
        <div key={key} className="data-item">
        <div className='num'>{index + 1}</div>
          <div className='small-heading'> {data[key].heading}</div>
          <img src={data[key].imageUrl} alt={`Image for ${data[key].heading}`} className="data-image" />
          <p>{data[key].description}</p>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default YourComponent;
