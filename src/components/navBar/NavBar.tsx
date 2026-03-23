import './navBar.scss'

interface Class {
  myClass?: string
}

const NavBar = ({myClass}: Class) => {
  return (
    <nav className={`navbar ${myClass ? myClass : ''}`}>
						<ul className="navbar__list">
							<li className="navbar__item">
								<a href="" className="navbar__link">Home</a></li>
							<li className="navbar__item">
								<a href="" className="navbar__link">About</a></li>
							<li className="navbar__item">
								<a href="" className="navbar__link">Tech Stack</a></li>
							<li className="navbar__item">
								<a href="" className="navbar__link">Projects</a></li>
							<li className="navbar__item">
								<a href="" className="navbar__link">Contact</a></li>
						</ul>
    </nav>
  )
}

export default NavBar