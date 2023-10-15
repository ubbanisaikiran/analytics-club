import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import About from './components/pages/About';
import Contactus from './components/pages/Contactus';
import Material from './components/pages/Material';
import QuickGo from './components/pages/QuickGo';



function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' Component={Home} />
    <Route path='/courses' Component={Courses} />
    <Route path='/About' Component={About} />
    <Route path='/Contactus' Component={Contactus} />
    <Route path='/courses/material' Component={Material} />
    <Route path='/quick/byshorts' Component={QuickGo} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
