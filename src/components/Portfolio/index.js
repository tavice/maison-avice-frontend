import React, { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import './styles.css';

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
    { id: 1, title: 'Project 1', image: 'https://loremflickr.com/360/360' },
    { id: 2, title: 'Project 2', image: 'https://loremflickr.com/360/360 ' },
    { id: 3, title: 'Project 3', image: 'https://loremflickr.com/360/360 ' },
    { id: 4, title: 'Project 4', image: 'https://loremflickr.com/360/360 ' },
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
