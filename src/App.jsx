import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="mat">
      <About />
      <Projects />
      <Contact />
      </div>
    </>
  );
}

export default App;