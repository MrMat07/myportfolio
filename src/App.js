// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importo los componenetes
import Header from "./components/layout/header";
import Nav from "./components/layout/nav";
import Footer from "./components/layout/footer";

import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Portafolio from "./components/portafolio/portafolio";
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/testimonials";


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portafolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
