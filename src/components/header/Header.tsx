import './header.scss'

import logo from '../header/icons/logo.svg'
import github from '../header/icons/github.svg'
import linkedin from '../header/icons/linkedin.svg'
import twitter from '../header/icons/twitter.svg'

import NavBar from "../navBar/NavBar.tsx";

const Header = () => {
	return (
		<div className="container">
			<header id='home' className="header">
				<img src={logo} alt="logo" className="header__logo"/>
				<div className="header__menu">
					<NavBar/>
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