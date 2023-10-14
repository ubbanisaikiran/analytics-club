import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/pages/Home';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' Component={Home} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
