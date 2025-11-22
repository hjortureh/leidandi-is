import React from 'react';
import Hero from './components/Hero';
import Teachers from './components/Teachers';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <main>
        <Hero />
        <Teachers />
        <Schedule />
        <Footer />
      </main>
    </div>
  );
}

export default App;
