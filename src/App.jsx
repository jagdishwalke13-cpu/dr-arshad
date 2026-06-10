import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import StatsBanner from './components/StatsBanner';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <StatsBanner />
        <CallToAction />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}

export default App;
