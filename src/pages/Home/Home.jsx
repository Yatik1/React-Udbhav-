import React, { useState } from 'react';
import './Home.css'

const Home = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  const renderUdbhavTexts = () => {
    const udbhavTexts = [];

    for (let i = 0; i < 50; i++) {
      const randomX = Math.floor(Math.random() * window.innerWidth);
      const randomY = Math.floor(Math.random() * window.innerHeight);
      const randomDelay = Math.floor(Math.random() * 5);
      udbhavTexts.push(
        <div
          key={i}
          className="udbhav-text"
          style={{
            top: randomY,
            left: randomX,
            animationDelay: `${randomDelay}s`,
          }}
        >
          UDBHAV
        </div>
      );
    }
    return udbhavTexts;
  };

  return (
    <div className='h-[80vh]'>
    <div className="h-full w-full fixed top-0 left-0" onMouseMove={handleMouseMove}>
      {renderUdbhavTexts()}
      <div
        className="udbhav-text-hover"
        style={{ top: coordinates.y, left: coordinates.x }}
      >
        UDBHAV2k23
      </div>
    </div>
    </div>
  );
};

export default Home;
