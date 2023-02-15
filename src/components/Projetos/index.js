import React from 'react';
import styles from './Projetos.module.css';
import img from '../../images/componentes.jpg';

export default function Projetos() {
  const itens = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <div className="container">
      <div id="projetos" className={styles.Projetos}>
        <h1>Projetos</h1>

        <section>
          {itens.map((item) => (
            <div key={item.id}>
              <img src={img} alt="componentes" />
              <h2>Projeto {item.id}</h2>
              <p>Tecnologias: HTML, CSS e JS</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
