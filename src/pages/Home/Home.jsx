import React from 'react';
import Spline from '@splinetool/react-spline';
import backgroundImage from '../../../public/background.jpg';
import Countdown from '../../components/shared/Countdown';
import './Home.css'

const Home = () => {
  
  return (
    <div className='h-[180vh] m-auto'
     
       style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',

       }}      
    >
       <div className="top-10 h-screen pt-[6rem]">  
          <div className="h-screen w-full pl-3" >    {/*  style={{ top: coordinates.y, left: coordinates.x }} */}
             <Spline scene="https://prod.spline.design/Bby0JwQNQzFYXggO/scene.splinecode" />
          </div>
          <Countdown />
       </div>
    </div>
  );
};

export default Home;
