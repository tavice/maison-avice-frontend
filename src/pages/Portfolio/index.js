import React, { useEffect, useRef, useState } from "react";
import Masonry from "masonry-layout";
import "./styles.css";

// Import images from assets
import los_altos_mansion from "../../assets/images/portfolio_images/los_altos_hills_mansion.png";
import chalet_forestier from "../../assets/images/portfolio_images/chalet_forest.png";
import pacific_cliff_mansion from "../../assets/images/portfolio_images/pacific_cliff_mansion.png";
import andalousian_villa from "../../assets/images/portfolio_images/andalousian_mansion.png";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const gridRef = useRef(null);
  const masonryInstance = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setActiveIndex(activeIndex === image ? -1 : image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveIndex(-1); // Reset active index
  };

  useEffect(() => {
    masonryInstance.current = new Masonry(gridRef.current, {
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
    });

    return () => masonryInstance.current.destroy();
  }, []);

  useEffect(() => {
    masonryInstance.current.layout();
  }, [activeIndex]);

  // Portfolio items array TO DO: CREATE DATABASE FOR PORTFOLIO ITEMS
  const portfolioItems = [
    { id: 1, title: "Los Altos Hills Mansion", image: los_altos_mansion },
    { id: 2, title: "Sonoma Retreat", image: chalet_forestier },
    { id: 3, title: "Pacific Cliff Estate", image: pacific_cliff_mansion },
    { id: 4, title: "Andalousian Villa", image: andalousian_villa },
    { id: 4, title: "Andalousian Villa", image: andalousian_villa },
   
  ];

  return (
    <div className="portfolio">
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged view" />
          <h3>{selectedImage.title}</h3>
        </div>
      )}
      <div ref={gridRef} className="grid">
        <div className="grid-sizer">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className={`grid-item ${activeIndex === item.id ? "active" : ""}`}
            onClick={() => handleImageClick(item.image)}
            tabIndex={0}
            onKeyPress={(event) =>
              event.key === "Enter" && handleImageClick(item.image)
            }
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src={item.image} alt={item.title} />
            <div className="title-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
