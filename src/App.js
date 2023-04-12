import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Clients from './pages/clients';
import Company from './pages/company';
import Contact from './pages/contact';
import Services from './pages/services';
import NotFound from './pages/notFound';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Company />} />
        <Route path="services" element={ <Services /> } />
        <Route path="clients" element={ <Clients /> } />
        <Route path="contact" element={ <Contact /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
