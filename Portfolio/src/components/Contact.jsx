import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xanevzbo'; // your form ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white py-28" id="contact">
      <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12 px-8 md:px-16 lg:px-24">
        <div className="flex-1 mb-12 md:mb-0">
          <h3 className="text-2xl mb-6">Let's Talk</h3>
          <p className="mb-6">I’m open to web & mobile projects. Let’s connect!</p>
          <div className="mb-6">
            <FaEnvelope className="inline-block text-green-400 mr-2" />
            <a href="mailto:minoo.yaghoubi@gmail.com" className="hover:underline">
              minoo.yaghoubi@gmail.com
            </a>
          </div>
          <div className="mb-6">
            <FaPhone className="inline-block text-green-400 mr-2" />
            <span>+358 465461799</span>
          </div>
          <div className="mb-6">
            <FaMapMarkerAlt className="inline-block text-green-400 mr-2" />
            <span>Finland</span>
          </div>
        </div>

        <div className="flex-1 w-full">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              rows="5"
              placeholder="Message"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-3 rounded-full"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
          {status && (
            <p className={`mt-4 ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
