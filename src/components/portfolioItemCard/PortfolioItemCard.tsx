import './portfolioItemCard.scss'

import link from './icons/link.svg'
import github from './icons/github.svg'


  interface ProjectCardProps {
  title: string,
  description: string,
  liveUrl: string,
  codeUrl: string,
  stack: string,
  img: string,
}

const PortfolioItemCard = ({img, title, description, stack, liveUrl, codeUrl} : ProjectCardProps) => {
  return (
    <div className="card">
      <img src={img} alt="project image" className="card__photo"/>
      <div className="card__content">
        <h2 className="card__header">{title}</h2>
        <p className="card__descr">{description}</p>
        <p className="card__stack">Tech stack : {stack}</p>
      <div className="card__links">
        <div className="card__link-wrapper">
          <img src={link} alt="live link" className="card__icon"/>
          <a href={liveUrl} className="card__link">Live Preview</a>
        </div>
        <div className="card__link-wrapper">
          <img src={github} alt="github" className="card__icon"/>
          <a href={codeUrl} className="card__link">View Code</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PortfolioItemCard;