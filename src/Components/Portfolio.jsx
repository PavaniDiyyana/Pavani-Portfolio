/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "High-performance single-page application🎉",
    description:
"An e-commerce website improvement with optimized dynamic routing and functionality to enhance user experience and resolved debugging issues.",
    url: "https://github.com/PavaniDiyyana/ecommerce-website",
  },
  {
    title: "Food-recipe app",
    description:
      "Contributed a responsive food-recipe app, enhancing performance $0% through lazy loading with best UI and enhanced user experience.",
    url: "https://github.com/PavaniDiyyana/Food-recipe-app"

  },
  {
    title: "Dynamic UI/UX Design with APIs",
    description:
      "Created a weather app with RESTful API integrationfor dynamic data fetching and implemented responsive web design.",
    url: "https://github.com/PavaniDiyyana/Weatherapp",
  },
  {
    title: "Responsive layouts",
    description:
      "Developed a responsive portfolio using front-end technologies with smooth transitions and dynamic animations to enhance user interface",
    url: "https://github.com/PavaniDiyyana/portfolio",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
