/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import LocationPage from './components/LocationPage';

const HomePage: React.FC = () => (
  <div className="relative min-h-screen bg-[#fcfcf9]">
    <Navbar />
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
    <Footer />
    <AIChat />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location/:locationId" element={<LocationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
