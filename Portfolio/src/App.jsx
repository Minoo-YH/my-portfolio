
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;

