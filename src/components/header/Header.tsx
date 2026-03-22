import './header.scss'

import logo from '../header/icons/logo.svg'
import github from '../header/icons/github.svg'
import linkedin from '../header/icons/linkedin.svg'
import twitter from '../header/icons/twitter.svg'

const Header = () => {
	return (
		<div className="container">
			<header className="header">
				<img src={logo} alt="logo" className="header__logo"/>
				<div className="header__menu">
					<nav className="header__navbar">
						<ul className="header__list">
							<li className="header__item">
								<a href="" className="header__link">Home</a></li>
							<li className="header__item">
								<a href="" className="header__link">About</a></li>
							<li className="header__item">
								<a href="" className="header__link">Tech Stack</a></li>
							<li className="header__item">
								<a href="" className="header__link">Projects</a></li>
							<li className="header__item">
								<a href="" className="header__link">Contact</a></li>
						</ul>
					</nav>
						<ul className="social">
							<li className="social__item">
								<a href="" className="social__link">
									<img src={github} alt="github" className="social__icon"/>
								</a>
							</li>
							<li className="social__item">
								<a href="" className="social__link">
									<img src={twitter} alt="twitter" className="social__icon"/>
								</a>
							</li>
							<li className="social__item">
								<a href="" className="social__link">
									<img src={linkedin} alt="linkedin" className="social__icon"/>
								</a>
							</li>
						</ul>
				</div>
			</header>
		</div>
	)
}

export default Header;