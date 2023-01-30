import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function Route1Container() {
    return (
      <div>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
  
  function Route2Container() {
    return (
      <div>
        <NavBar />
        <Banner />
        <Contact />
        <Footer />
      </div>
    );
  }

  export { Route1Container, Route2Container }