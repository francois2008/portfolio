import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import About from "./components/pages/About";
import Curriculum from "./components/pages/Curriculum";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/curriculum' element={<Curriculum />} />
       <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
