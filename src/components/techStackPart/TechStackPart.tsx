import './techStackPart.scss'

import htmlIcon from './icons/html.svg'
import cssIcon from './icons/css.svg'
import jsIcon from './icons/js.svg'
import githubIcon from './icons/github.svg'
import gitIcon from './icons/git.svg'
import reactIcon from './icons/react.svg'
import bootstrapIcon from './icons/bootstrap.svg'
import sassIcon from './icons/sass.svg'

import {motion, type Variants} from "framer-motion";

const TechStackPart = () => {

  //animation

  const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5, ease: 'easeOut'}
    }
  }


  //function
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
      <section id='techStack' className="tech">
        <h2 className="tech__title">My Tech Stack</h2>
        <p className="tech__subtitle"> Technologies I’ve been working with recently</p>
        <motion.ul
          className="tech__list"
          variants={containerVariants}
          initial="hidden"
          whileInView='visible'
          viewport={{once: true, amount: 0.2}}>
          {techStack.map((tech, index) => (
            <motion.li key={index} className="tech__item" variants={itemVariants} whileHover={{scale: 1.15, y: -5}}>
              <img src={tech.icon} alt={tech.name} className="tech__icon"/>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </div>
  )
}

export default TechStackPart