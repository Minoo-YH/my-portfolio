import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = e.target.elements.email.value;
    console.log(`Email Submitted: ${email}`);

  };
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Minoo</h3>
            <p className="text-gray-400">
              Full-Stack Web Developer specializing in web development, SEO, and UX design. I focus on creating seamless and engaging user experiences while optimizing websites for search engines to enhance visibility and performance.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Minoo. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a 
              href="https://www.linkedin.com/in/minoo-yaghoubi-692b42182/"  
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/Minoo-YH"  
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/terms" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
