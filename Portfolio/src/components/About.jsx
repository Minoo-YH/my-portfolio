import React from 'react';
import AboutImg from '../assets/Minoo.png';

const About = () => {
  // Reusable ProgressBar component
  const ProgressBar = ({ label, width }) => (
    <div className="flex items-center mb-6">
      <label className="w-36 text-sm text-gray-300">{label}</label>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
          transform transition-transform duration-300 hover:scale-105`}
          style={{ width }} // Dynamic width for progress
        />
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white py-28" id="about">
      <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:space-x-12 px-8 md:px-16 lg:px-24">
        <img 
          src={AboutImg} 
          alt="A portrait of the developer" 
          className="w-56 h-56 rounded-full object-cover mb-8 md:mb-0 border-4 border-gradient-to-r from-green-400 to-blue-500 shadow-lg"
        />
        <div className="flex-1 md:px-4 lg:px-8">
          <p className="text-lg mb-8 text-gray-300">
            I am a passionate full-stack Web & Mobile developer with a focus on building
            modern and responsive applications. With a strong foundation
            in both frontend and backend technologies, I strive to create
            seamless and efficient user experiences. My aim is to deliver applications
            that are not only functional but also intuitive and beautiful.
          </p>
          <div className="space-y-6">
            <div className="space-y-4">
              <ProgressBar label="HTML & CSS" width="85%" />
              <ProgressBar label="React JS" width="80%" />
              <ProgressBar label="Node JS" width="75%" />
              <ProgressBar label="JavaScript" width="90%" />
              <ProgressBar label="React Native Expo" width="60%" />
              <ProgressBar label="Tailwind CSS" width="70%" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-between text-center px-8 md:px-16 lg:px-24">
        <div className="flex-1">
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            2+
          </h3>
          <p className="text-gray-400">Years Experience</p>
        </div>
        <div className="flex-1">
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            15+
          </h3>
          <p className="text-gray-400">Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
