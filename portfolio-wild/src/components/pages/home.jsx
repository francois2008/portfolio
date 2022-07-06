import React from 'react';
import MuiDrawer from '../commons/MuiDrawer';
import Footer from '../commons/Footer';
import '../../home.css';

function home() {
  return (
    <div className='full-home'>
      <MuiDrawer />
      <div className='home'>
        <h1>Welcome !!!</h1>
        <p>Développeur web full-stack junior</p>
        <div className='footer'>
          <Footer />
        </div>
      </div>
      
    </div>
  );
}

export default home;
