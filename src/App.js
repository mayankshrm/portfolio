import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import FeaturedProject from './components/featured/FeaturedProject';
import Portfolio from './components/projects/Portfolio';
import GithubStats from './components/github/GithubStats';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => (
  <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <FeaturedProject />
      <Portfolio />
      <GithubStats />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
  </>
);

export default App;
