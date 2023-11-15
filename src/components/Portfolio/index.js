import React, { useEffect, useRef, useState } from "react";
import Masonry from "masonry-layout";
import "./styles.css";

//import images from '../../assets/images/portfolio_images';
import los_altos_mansion from "../../assets/images/portfolio_images/los_altos_hills_mansion.png";
import chalet_forestier from "../../assets/images/portfolio_images/chalet_forest.png";
import pacific_cliff_mansion from "../../assets/images/portfolio_images/pacific_cliff_mansion.png";
import andalousian_villa from "../../assets/images/portfolio_images/andalousian_mansion.png";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const gridRef = useRef(null);
  const masonryInstance = useRef(null);

  const handleImageClick = (index) => {
    // If the clicked image is already active, deactivate it
    // Otherwise, activate the clicked image
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  useEffect(() => {
    // Initialize Masonry after the component has mounted
    masonryInstance.current = new Masonry(gridRef.current, {
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true, // Use percentage widths for responsive layout
    });

    return () => {
      // Clean up the Masonry instance when the component unmounts
      masonryInstance.current.destroy();
    };
  }, []);

  useEffect(() => {
    // Update the Masonry layout if an item is clicked
    masonryInstance.current.layout();
  }, [activeIndex]);
  // Dummy data for the portfolio items
  const portfolioItems = [
    { id: 1, title: "Los Altos Hills Mansion", image: los_altos_mansion },
    { id: 2, title: "Sonoma Retreat", image: chalet_forestier },
    { id: 3, title: "Pacific Cliff Estate", image: pacific_cliff_mansion },
    { id: 4, title: "Andalousian Villa", image: andalousian_villa },
    // ... other items
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div ref={gridRef} className="grid">
        {/* Invisible element that sets the column width */}
        <div className="grid-sizer"></div>

        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className={`grid-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleImageClick(index)}
            tabIndex={0} // Make it focusable for keyboard users
            onKeyPress={(event) =>
              event.key === "Enter" && handleImageClick(index)
            }
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
