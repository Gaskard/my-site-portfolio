import './portfolioList.scss'
import photo from "./img/Rectangle 4.jpg";

import PortfolioItemCard from "../portfolioItemCard/PortfolioItemCard";

import { motion } from "framer-motion";


const PortfolioList = () => {


  const projectsData = [
    {
      id: 1,
      img: photo,
      title: 'Project Tile goes here',
      description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      stack: 'HTML , JavaScript, SASS, React',
      liveUrl: 'https://live.github.io',
      codeUrl: 'https://live.github.io',
    },
    {
      id: 2,
      img: photo,
      title: 'Project Tile goes here',
      description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      stack: 'HTML , JavaScript, SASS, React',
      liveUrl: 'https://live.github.io',
      codeUrl: 'https://live.github.io',
    },
    {
      id: 3,
      img: photo,
      title: 'Project Tile goes here',
      description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      stack: 'HTML , JavaScript, SASS, React',
      liveUrl: 'https://live.github.io',
      codeUrl: 'https://live.github.io',
    },
    {
      id: 4,
      img: photo,
      title: 'Project Tile goes here',
      description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      stack: 'HTML , JavaScript, SASS, React',
      liveUrl: 'https://live.github.io',
      codeUrl: 'https://live.github.io',
    },
    {
      id: 5,
      img: photo,
      title: 'Project Tile goes here',
      description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      stack: 'HTML , JavaScript, SASS, React',
      liveUrl: 'https://live.github.io',
      codeUrl: 'https://live.github.io',
    },
    {
      id: 6,
      img: photo,
      title: 'Project Tile goes here',
      description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      stack: 'HTML , JavaScript, SASS, React',
      liveUrl: 'https://live.github.io',
      codeUrl: 'https://live.github.io',
    },
    {
      id: 7,
      img: photo,
      title: 'Project Tile goes here',
      description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      stack: 'HTML , JavaScript, SASS, React',
      liveUrl: 'https://live.github.io',
      codeUrl: 'https://live.github.io',
    },
  ]

  return (
      <section id='projects' className="portfolio">
        <div className="container">
          <h1 className="portfolio__title">Projects</h1>
          <p className="portfolio__subtitle">Things I’ve built so far</p>
        </div>
        <div className="portfolio__list">
            <motion.div
              drag='x'
              dragConstraints={{right: 0, left: -1500}}
              className="portfolio__drag-inner"
              whileTap={{ cursor: "grabbing" }}>
              {projectsData.map(project => (
            <div className="portfolio__drag-wrapper">
              <PortfolioItemCard
              key={project.id}
              img={project.img}
              title={project.title}
              description={project.description}
              stack={project.stack}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
            />
            </div>
          ))}
            </motion.div>
        </div>
      </section>
  )
}

export default PortfolioList