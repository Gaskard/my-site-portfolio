import './techStackPart.scss'

import htmlIcon from './icons/html.svg'
import cssIcon from './icons/css.svg'
import jsIcon from './icons/js.svg'
import githubIcon from './icons/github.svg'
import gitIcon from './icons/git.svg'
import reactIcon from './icons/react.svg'
import bootstrapIcon from './icons/bootstrap.svg'
import sassIcon from './icons/sass.svg'

const TechStackPart = () => {

  interface TechItem {
    name: string;
    icon: string;
  }

  const techStack: TechItem[] = [
    {name : 'html', icon: htmlIcon},
    {name : 'js', icon: jsIcon},
    {name : 'react', icon: reactIcon},
    {name : 'css', icon: cssIcon},
    {name : 'github', icon: githubIcon},
    {name : 'sass', icon: sassIcon},
    {name : 'git', icon: gitIcon},
    {name : 'bootstrap', icon: bootstrapIcon},
  ]

  return (
    <div className="container">
      <section className="tech">
        <h2 className="tech__title">My Tech Stack</h2>
        <p className="tech__subtitle"> Technologies I’ve been working with recently</p>
        <ul className="tech__list">
          {techStack.map((tech, index) => (
            <li key={index} className="tech__item">
              <img src={tech.icon} alt={tech.name} className="tech__icon"/>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default TechStackPart