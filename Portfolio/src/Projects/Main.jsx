import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import React from "react";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) =>
      item.category.includes(buttonCategory)
    );

    setArr(newArr);
  };

  return (
    <main className="flex">
      <section id="projects" className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => handleClick("js")}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>

        <button
          onClick={() => handleClick("python")}
          className={currentActive === "python" ? "active" : null}
        >
          Python
        </button>
      </section>

      <section id="projects" className="flex right-section">
        {arr.map((item) => (
          <article key={item.imgPath} className="card">
            <img width={266} src={item.imgPath} alt="" />

            <div style={{ width: "266px" }} className="box">
              <h1 className="title">{item.projectTitle}</h1>
              <p className="sub-title">{item.subtitle}</p>

              <div className="flex icons">
                <div style={{ gap: "11px" }} className="flex">
                  <div className="icon-link"></div>
                  <a
                    className="link flex"
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon-github">flkehdsfs</div>
                  </a>
                </div>

                <a className="link flex" href="">
                  more
                  <span
                    style={{ alignSelf: "end" }}
                    className="icon-arrow-right"
                  ></span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
