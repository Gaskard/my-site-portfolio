import './navBar.scss'

import {Link} from "react-scroll";

interface Class {
  myClass?: string
}

const NavBar = ({myClass}: Class) => {
  return (
    <nav className={`navbar ${myClass ? myClass : ''}`}>
						<ul className="navbar__list">
							<li className="navbar__item">
								<Link to='home'
											href={"#home"}
											smooth={true}
											duration={500}
											offset={-50}
											className="navbar__link">Home
								</Link>
							</li>
							<li className="navbar__item">
								<Link to='about'
											href={"#about"}
											smooth={true}
											duration={500}
											offset={-50}
											className="navbar__link">About
								</Link>
							</li>
							<li className="navbar__item">
								<Link to='techStack'
											href={"#techStack"}
											smooth={true}
											duration={500}
											offset={-50}
											className="navbar__link">Tech Stack
								</Link>
							</li>
							<li className="navbar__item">
								<Link to='projects'
											href={"#projects"}
											smooth={true}
											duration={500}
											offset={-50}
											className="navbar__link">Projects
								</Link>
							</li>
							<li className="navbar__item">
								<Link to='contacts'
											href={"#contacts"}
											smooth={true}
											duration={500}
											offset={-50}
											className="navbar__link">Contact
								</Link>
							</li>
						</ul>
    </nav>
  )
}

export default NavBar