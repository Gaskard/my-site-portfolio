import "normalize.css";
import '../../styles/reset.scss';
import '../../styles/base.scss';

import Header from "../header/Header.tsx";
import HelloPart from "../helloPart/HelloPart.tsx";
import TechStackPart from "../techStackPart/TechStackPart.tsx";

function App() {

  return (
      <>
          <Header/>
          <HelloPart/>
          <TechStackPart/>
      </>
  )
}

export default App;
