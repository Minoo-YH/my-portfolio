import React from 'react';
import AboutImg from '../assets/Minoo.png';

const About = () => {
  // Reusable ProgressBar component
  const ProgressBar = ({ label, width }) => (
    <div className="flex items-center mb-4">
      <label className="w-2/12">{label}</label>
      <div className="grow bg-gray-800 rounded-full h-2.5">
        <div
          className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
          transform transition-transform duration-300 hover:scale-105`}
          style={{ width }} // Dynamic width for progress
        />
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white py-28" id="about">  {/* Increased py-20 to py-28 */}
      <h2 className="text-4xl font-bold text-center mb-16">About Me</h2> {/* Increased bottom margin mb-12 to mb-16 */}
      <div className="flex flex-col md:flex-row items-center md:space-x-12 px-8 md:px-16 lg:px-24">  {/* Added horizontal padding */}
        <img 
          src={AboutImg} 
          alt="A portrait of the developer" 
          className="w-50 h-60 rounded object-cover mb-8 md:mb-0"
        />
        <div className="flex-1 md:px-4 lg:px-8"> {/* Added padding to the right of the text */}
          <p className="text-lg mb-8">
            I am a passionate full-stack web developer with a focus on building
            modern and responsive web applications. With a strong foundation
            in both frontend and backend technologies, I strive to create
            seamless and efficient user experiences.
          </p>
          <div className="space-y-6">  {/* Increased space between the progress bars */}
            <ProgressBar label="HTML & CSS" width="80%" />
            <ProgressBar label="React JS" width="80%" />
            <ProgressBar label="Node JS" width="75%" />
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-between text-center px-8 md:px-16 lg:px-24">  {/* Increased margin-top and added padding */}
        <div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-green-400 to-blue-500">
            1+
          </h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-green-400 to-blue-500">
            12+
          </h3>
          <p>Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;


