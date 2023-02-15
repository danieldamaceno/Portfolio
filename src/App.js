import React from 'react';
import './App.css';

import Header from './components/Header';
import Servicos from './components/Servicos';
import Skills from './components/Skills';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Sobre />
      <Projetos />
      <Servicos />
      <Skills />
      <Footer />
    </div>
  );
}
