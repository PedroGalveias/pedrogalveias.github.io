import './App.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
        <Topbar/>
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Testimonials/>
          <Work/>
          <Contact/>
        </div>
        <p>
          Hello World!
        </p>
    </div>
  );
}

export default App;
