import React from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import HowItWorksSection from './sections/HowItWorksSection';
import DifferentialsSection from './sections/DifferentialsSection';
import TargetAudienceSection from './sections/TargetAudienceSection';
import FinalCTA from './sections/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <DifferentialsSection />
        <TargetAudienceSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;