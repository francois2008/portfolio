import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>
            <Link to='/about'>A propos</Link>
          </li>
          <li>
            <Link to='/curriculum'>Curriculum</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
