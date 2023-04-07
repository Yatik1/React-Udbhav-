import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
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
        className="h-full w-full z-[999999]"
        // style={{ top: coordinates.y, left: coordinates.x }}
      >
        <Spline scene="https://prod.spline.design/GLhoxu-ahLYvKqeO/scene.splinecode" />
      </div>
    </div>
    </div>
  );
};

export default Home;
