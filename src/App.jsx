import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import './styles/style.scss';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');

  return (
    <div id='app'>
      <Header currentSection={currentSection} />
      <Landing setCurrentSection={setCurrentSection} />
      <Footer />
    </div>
  );
}

export default App;
