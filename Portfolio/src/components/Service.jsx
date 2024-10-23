import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    fullDescription: "This includes layout, color schemes, typography, and overall aesthetics for websites."
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    fullDescription: "Using React.js and Javascript."
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    fullDescription: "Using Node.js or Python with databases like MySQL, SQL, or MongoDB."
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    fullDescription: "As a Full-Stack Developer, I manage both client-side (frontend) and server-side (backend) development, ensuring seamless functionality across the entire application. I work with frontend technologies like HTML, CSS, and JavaScript (React) to create engaging user interfaces, while handling backend technologies like Node.js, Express, and MySQL for database management, API development, and server-side logic. This holistic approach allows me to build scalable, responsive, and secure web applications from end to end, ensuring smooth integration between all components."
  },
  {
    id: 5,
    title: "Cybersecurity Junior",
    description: "Developed secure, responsive websites by integrating cybersecurity best practices to prevent vulnerabilities like SQL Injection, XSS, and ensure data protection.",
    fullDescription: "As a Cybersecurity Junior, I integrated key security measures into web applications to safeguard against vulnerabilities like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). I have experience conducting security audits, managing user authentication, and ensuring secure data transmission through SSL/TLS encryption. I also employed techniques like input validation, proper error handling, and regular software updates to minimize risks. My work has helped ensure websites remain resilient against common cyber threats while protecting sensitive user data and maintaining compliance with security standards."
  },
  {
    id: 6,
    title: "Cloud Computing",
    description: "Developed and deployed scalable web applications using cloud platforms, ensuring optimized performance, data security, and seamless integration with cloud services.",
    fullDescription: "With experience in both Microsoft Azure and Amazon Web Services (AWS), I have built and deployed scalable, reliable, and secure cloud-based applications. Using Azure, I leveraged services like Azure App Services, Azure Functions, and Azure SQL Database to create dynamic, serverless architectures. With AWS, I worked with EC2, S3, and Lambda to ensure flexible storage, powerful compute capabilities, and seamless integration with cloud-native services. My knowledge of cloud security, load balancing, and cost optimization ensures high-performing, cost-efficient solutions tailored to the needs of modern web applications."
  },
];

const Services = () => {
  // State to manage expanded service
  const [expandedServiceId, setExpandedServiceId] = useState(null);

  // Function to toggle the expanded service
  const toggleReadMore = (id) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>

              {expandedServiceId === service.id && (
                <p className="mt-2 text-gray-400">{service.fullDescription}</p>
              )}

              <button
                onClick={() => toggleReadMore(service.id)}
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                {expandedServiceId === service.id ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
