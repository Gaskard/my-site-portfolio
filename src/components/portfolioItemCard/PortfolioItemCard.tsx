import './portfolioItemCard.scss'

import link from './icons/link.svg'
import github from './icons/github.svg'

import photo from './img/Rectangle 4.jpg'

const PortfolioItemCard = () => {
  return (
    <li className="card">
      <img src={photo} alt="project image" className="portfolio__photo"/>
      <div className="card__content">
        <h2 className="card__header">Project Tile goes here</h2>
      <p className="card__descr">This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
      <div className="card__links">
        <div className="card__link-wrapper">
          <img src={link} alt="live link" className="card__icon"/>
          <a href="" className="card__link">Live Preview</a>
        </div>
        <div className="card__link-wrapper">
          <img src={github} alt="github" className="card__icon"/>
          <a href="" className="card__link">View Code</a>
        </div>
      </div>
      </div>
    </li>
  )
}

export default PortfolioItemCard;