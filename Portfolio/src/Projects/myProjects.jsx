import React from "react";


export const myProjects = [
   
    {projectTitle: "CRUD",
    category: ["react+node"],
    imgPath: "src/assets/CRUD.png",
    subtitle: "Wep  app for managing data",
    githubLink: "https://github.com/Abdullah22-22/crud"
  },
  {projectTitle: "Employee management",
    category: ["react"],
    imgPath: "src/assets/2.png",
    subtitle: "Wep  app for managing data",
    githubLink: "https://github.com/Abdullah22-22/crud"
  },
  {projectTitle: "Python",
    category: ["python"],
    imgPath: "src/assets/python.png",
    subtitle: "Some  python exsercices",
    githubLink: "https://github.com/Minoo-YH/Python"
  },
  {projectTitle: "Full-stack website",
    category: ["MERN"],
    imgPath: "src/assets/travel.PNG",
    subtitle: "Travel website",
    githubLink: "https://github.com/oliviaskye/travel-site",
  },
  {projectTitle: "CoreOrient OY website",
    category: ["WordPress"],
    imgPath: "src/assets/1.png",
    subtitle: "Update the website + add cyber security + SEO",
    githubLink: "https://github.com/Minoo-YH/Coreorient-website",
  },
  {projectTitle: "Bank management system",
    category: ["c++"],
    imgPath: "src/assets/bnk.png",
    subtitle: "Bank management system",
    githubLink: "https://github.com/Minoo-YH/Coreorient-website",
  },
  {projectTitle: "React native mobile app with expo",
    category: ["react native expo"],
    imgPath: "src/assets/vesko.png",
    subtitle: "Vesko mobile app internship",
    githubLink: "https://github.com/Minoo-YH/Coreorient-website",
  }

  ];

  const Projects = () => {
    return (
      <div className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          {myProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.imgPath} alt={project.projectTitle} width={200} />
              <h3>{project.projectTitle}</h3>
              <p>{project.subtitle}</p>
              <p><strong>Category:</strong> {project.category.join(', ')}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects; //  This allows <Projects /> to work in App.jsx