import React from 'react';
import Spline from '@splinetool/react-spline';
import backgroundImage from '../../../public/background.jpg';
import './Home.css'

const Home = () => {
  
  return (
    <div className='h-screen m-0'
     
       style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',

       }}      
    >
       <div className="top-10 h-screen ml-0">  
          <div className="h-full w-full" >    {/*  style={{ top: coordinates.y, left: coordinates.x }} */}
             <Spline scene="https://prod.spline.design/vakXcAJXStGdHotW/scene.splinecode" />
          </div>
       </div>

    </div>
  );
};

export default Home;
