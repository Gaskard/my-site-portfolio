import "normalize.css";
import '../../styles/reset.scss';
import '../../styles/base.scss';

import Header from "../header/Header.tsx";
import HelloPart from "../helloPart/HelloPart.tsx";
import TechStackPart from "../techStackPart/TechStackPart.tsx";
import PortfolioList from "../portfolioList/PortfolioList.tsx";
import Footer from "../footer/Footer.tsx";

function App() {

  return (
      <>
        <Header/>
        <HelloPart/>
        <TechStackPart/>
        <PortfolioList/>
        <Footer/>
      </>
  )
}

export default App;
