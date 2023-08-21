import React from "react";
import "./styles.css";
import Slider from "react-slick";
import clientImage1 from "../../assets/images/clientImage1.jpeg"; // clientImage1
import clientImage2 from "../../assets/images/clientImage2.jpeg"; //Photo by <a href="https://unsplash.com/@mariaeg2?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maria Eduarda</a> on <a href="https://unsplash.com/photos/glbfI0leexg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import clientImage3 from "../../assets/images/clientImage3.jpeg"; //Photo by <a href="https://unsplash.com/@mariaeg2?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maria Eduarda</a> on <a href="https://unsplash.com/photos/glbfI0leexg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

function Testimonials() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <Slider {...settings}>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <img src={clientImage1} alt="Client 1" />
              <p>
                "The team transformed our home into a masterpiece. We couldn't
                be happier with the results!"
              </p>
              <h4>- John Smith</h4>
            </div>
          </div>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <img src={clientImage2} alt="Client 2" />
              <p>
                "Professional, creative, and attentive. Highly recommended for
                any design project."
              </p>
              <h4>- Jane Doe</h4>
            </div>
          </div>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <img src={clientImage3} alt="Client 3" />
              <p>
                "They made our office space vibrant and functional. A pleasure
                to work with!"
              </p>
              <h4>- Emily Johnson</h4>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Testimonials;
