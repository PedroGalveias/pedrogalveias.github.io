import './App.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Works from './components/work/Works';
import Contact from './components/contact/Contact';
import {useState} from "react";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Testimonials/>
          <Works/>
          <Contact/>
        </div>
        <p>
          Hello World!
        </p>
    </div>
  );
}

export default App;
