import React from 'react';
import "./styles.css";
import serviceImage1 from '../../assets/images/service1.jpeg';
import serviceImage2 from '../../assets/images/service2.jpeg';
import serviceImage3 from '../../assets/images/service3.jpeg';

function Services() {
  return (
    <section className="services">
      <h2>Our Architectural and Design Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={serviceImage1} alt="Luxury New Construction in San Francisco Bay Area" />
          <h3>New Construction</h3>
          <p>Specializing in luxury new construction, Maison Avice creates elegant, sustainable living spaces in the San Francisco Bay Area, blending traditional methods with modern technology.</p>
        </div>
        <div className="service-card">
          <img src={serviceImage2} alt="High-end Remodeling and Renovation Services" />
          <h3>Remodel</h3>
          <p>Transform your existing space into a modern, luxurious environment. Our remodeling services focus on sustainable, high-quality renovations that redefine comfort and style.</p>
        </div>
        <div className="service-card">
          <img src={serviceImage3} alt="Custom Sustainable Furniture Design" />
          <h3>Custom Furniture</h3>
          <p>Our custom furniture design services offer unique, eco-friendly pieces tailored to your preferences, complementing our commitment to sustainable luxury living.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
