import './footer.scss'
import '../../styles/base.scss'

import logo from './icons/logo.svg'
import github from './icons/github.svg'
import linkedin from './icons/linkedin.svg'
import twitter from './icons/twitter.svg'
import mail from './icons/mail.svg'

import NavBar from "../navBar/NavBar.tsx";

const Footer = () => {
  return (
    <div className="container">
      <footer id='contacts' className="footer">
        <img src={logo} alt="logo" className="footer__logo"/>
        <div className="footer__social">
          <div className="footer__mail">
            <img src={mail} alt="mail" className="footer__icon"/>
            <a href="mailto:dimacr137@gmail.com" className="footer__email">dimacr137@gmail.com</a>
          </div>
          <ul className="footer__links">
            <li className="footer__item">
              <a href="" className="footer__link">
                <img src={github} alt="github" className="footer__icon"/>
              </a>
            </li>
            <li className="footer__item">
              <a href="" className="footer__link">
                <img src={twitter} alt="twitter" className="footer__icon"/>
              </a>
            </li>
            <li className="footer__item">
              <a href="" className="footer__link">
                <img src={linkedin} alt="linkedin" className="footer__icon"/>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="divider"></div>
      <NavBar myClass='navbar__footer'/>
    </div>
  )
}

export default Footer;