import React from 'react';
import styles from './Servicos.module.css';
import { RiSmartphoneFill, RiCodeView, RiDatabase2Fill } from 'react-icons/ri';

export default function Servicos() {
  return (
    <div className="container">
      <div id="servicos" className={styles.servicos}>
        <h1>Serviços</h1>

        <section className={styles.options}>
          <div>
            <RiCodeView />
            <h2>Criação de sites</h2>
          </div>
          <div>
            <RiSmartphoneFill />
            <h2>Sites responsivos</h2>
          </div>
          <div>
            <RiDatabase2Fill />
            <h2>Back-end</h2>
          </div>
        </section>
      </div>
    </div>
  );
}
