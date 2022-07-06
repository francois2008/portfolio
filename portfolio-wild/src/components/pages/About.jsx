import React from 'react';
import MuiDrawer from '../commons/MuiDrawer';
import Footer from '../commons/Footer';
import '../../about.css';

function About() {
  return (
    <div className='full-about'>
       <MuiDrawer />
      <div className='about'>
        <h1>A propos</h1>
        <p className='text-about'>
          Je suis en formation de développeur web et apllication mobile, à la
          recherche d'un cdi/cdd ou d'un stage 4 mois à partir d'aout 2022. Je
          suis curieux, persévérant et j'aime étendre mes connaissances. J'aime
          les nouveaux challenges, le travail en équipe et la diversité des
          projets du metier de développeur web.
        </p>
        
        <Footer />
        
      </div>
    </div>
  );
}

export default About;
