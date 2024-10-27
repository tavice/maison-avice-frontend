import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import "./styles.css";
// Import loading spinner
import LoadingSpinner from "../loadingSpinner";

const Services = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);

const getServices = useCallback(async () => {
  try {
    const res = await axios.get(`${props.URL}/services`);
   
    setServices(res.data);
  
  } catch (err) {
    console.error("Error fetching services:", err);
  }
}, [props.URL]);

useEffect(() => {
  getServices();
}, [getServices]);

useEffect(() => {
  // Check if all project images are loaded
  const imagePromises = services.map((project) => {
    const image = new Image();
    image.src = project.imageUrl;
    return new Promise((resolve) => {
      image.onload = resolve;
      image.onerror = resolve; // Handle image loading errors
    });
  });

  Promise.all(imagePromises)
    .then(() => {
      setIsLoading(false); // All images are loaded
    })
    .catch(() => {
      setIsLoading(false); // In case of loading errors
    });
}, [services]);



  return (
    <section className="services">
      <h2>Our Architectural and Design Services</h2>
      {isLoading && <LoadingSpinner />}
      <div className="services-grid">
        {!isLoading && services.map((service) => (
          <div key={service._id} className="service-card">
            <img src={service.imageUrl} alt={service.title} width="300" height="200" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a
                href="https://calendly.com/maisonavice/book-your-discovery-call"
                className="contact-button-service"
                target="_blank"
                rel="noreferrer"
              >
                Inquire about our {service.title}!
              </a>
         
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
