import React from 'react';
import MuiDrawer from '../commons/MuiDrawer';
import Footer from '../commons/Footer';
import '../../portfolio.css';
import apside from '../../logo_apside_clair.png';
import narif from '../../LogoFull.png';
import veloloco from '../../veloloco-removebg-preview.png';

function Portfolio() {
  return (
    <div>
      <div className='full'>
        <MuiDrawer />
        <div className='tittle'>
          <h1>Portfolio</h1>

          <div className='portfolio'>
            <div className='photo-portfolio'>
              <a href='https://github.com/francois2008/Apside-Community'>
                <img src={apside} alt='Apside community' />
                APSIDE COMMUNITY
              </a>
            </div>
            <div className='photo-portfolio'>
              <a href='https://github.com/francois2008/N.A.R.I.F'>
                <img src={narif} alt='narif' />
                NARIF
              </a>
            </div>
            <div className='photo-portfolio'>
              <a href='https://github.com/francois2008/2022-03-JS-Toulouse-project-2-veloloco'>
                <img src={veloloco} alt='vélo loco' />
                VELO LOCO
              </a>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
