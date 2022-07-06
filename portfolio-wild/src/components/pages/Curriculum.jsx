import React from 'react';
import MuiDrawer from '../commons/MuiDrawer';
import Footer from '../commons/Footer';
import Cvfrancois from '../../francoispobelle.png';
import Cvfrancoispdf from '../../francoispobelle.pdf';
import '../../Curriculum.css';

function Curriculum() {
  return (
    <div className='full-curriculum'>
       <MuiDrawer />
      <div className='curriculum'>
        <h1>Curriculum Vitae </h1>
        <a className='cv' href={Cvfrancoispdf}>
          <img className='cv' src={Cvfrancois} alt='CV' />
        </a>
        
        <Footer />
        
      </div>
    </div>
  );
}

export default Curriculum;
