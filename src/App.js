import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import About from './components/About';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        
        <ProjectList />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}

export default App;


