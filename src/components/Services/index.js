import React from 'react';
import "./styles.css";
import serviceImage1 from '../../assets/images/service1.jpeg'; // https://unsplash.com/photos/B8dk2AakWMY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
import serviceImage2 from '../../assets/images/service2.jpeg'; //https://unsplash.com/photos/B8dk2AakWMY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
import serviceImage3 from '../../assets/images/service3.jpeg'; //Photo by <a href="https://unsplash.com/@iamromankraft?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roman Kraft</a> on <a href="https://unsplash.com/photos/7Y56qLx2oAk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={serviceImage1} alt="Service 1" />
          <h3>New Construction </h3>
          <p>Creating elegant and functional living spaces that reflect your unique style.</p>
        </div>
        <div className="service-card">
          <img src={serviceImage2} alt="Service 2" />
          <h3>Remodel</h3>
          <p>Turning an exisitng space into the new space of your dream !</p>
        </div>
        <div className="service-card">
          <img src={serviceImage3} alt="Service 3" />
          <h3>Custom Furniture</h3>
          <p>Designing bespoke furniture pieces that add character and functionality to your space.</p>
        </div>
       
      </div>
    </section>
  );
}

export default Services;
