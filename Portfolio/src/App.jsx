import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './Projects/Main';

// import { myProjects } from './Projects/myProjects'; // Optional: only if you need the data
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Main />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
