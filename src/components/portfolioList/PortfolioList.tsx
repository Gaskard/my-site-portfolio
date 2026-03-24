import './portfolioList.scss'
import photo from "./img/Rectangle 4.jpg";

import PortfolioItemCard from "../portfolioItemCard/PortfolioItemCard.tsx";


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
    <div className="container">
      <section id='projects' className="portfolio">
        <h1 className="portfolio__title">Projects</h1>
        <p className="portfolio__subtitle">Things I’ve built so far</p>
        <ul className="portfolio__list">
          {projectsData.map(project => (
            <PortfolioItemCard
              key={project.id}
              img={project.img}
              title={project.title}
              description={project.description}
              stack={project.stack}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default PortfolioList