import React, { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import './styles.css';

//import images from '../../assets/images/portfolio_images';
import los_altos_mansion from '../../assets/images/portfolio_images/los_altos_hills_mansion.png';
import chalet_forestier from '../../assets/images/portfolio_images/chalet_forest.png';
import pacific_cliff_mansion from '../../assets/images/portfolio_images/pacific_cliff_mansion.png';
import andalousian_villa from '../../assets/images/portfolio_images/andalousian_mansion.png';

const Portfolio = () => {
  const gridRef = useRef(null); // This ref will point to the grid container

  useEffect(() => {
    // Initialize Masonry after the component has mounted
    new Masonry(gridRef.current, {
      itemSelector: '.portfolio-item', // This should match the class of your grid items
      columnWidth: 200, // The width of one column in pixels
      gutter: 10 // The space between items in pixels
    });
  }, []);

  // Dummy data for the portfolio items
  const portfolioItems = [
    { id: 1, title: 'Los Altos Hills Mansion', image: los_altos_mansion },
    { id: 2, title: 'Sonoma Retreat', image: chalet_forestier },
    { id: 3, title: 'Pacific Cliff Estate', image: pacific_cliff_mansion },
    { id: 4, title: 'Andalousian Villa', image: andalousian_villa },
    // ... other items
  ];

  return (
    <div ref={gridRef} className="grid">
      {portfolioItems.map(item => (
        <div key={item.id} className="grid-item portfolio-item">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
