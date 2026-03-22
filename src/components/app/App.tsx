import "normalize.css";
import '../../styles/reset.scss';
import '../../styles/base.scss';

import Header from "../header/Header.tsx";
import HelloPart from "../helloPart/HelloPart.tsx";

function App() {

  return (
      <>
          <Header/>
          <HelloPart/>
      </>
  )
}

export default App;
