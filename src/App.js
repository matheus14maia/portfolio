import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main className="text-black bg-white">
      <Navbar/>
      <About/>
      <Skills/>
    </main>
  );
}

export default App;
