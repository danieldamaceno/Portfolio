import React from 'react';
import styles from './Skills.module.css';

export default function Skills() {
  const devicons = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
  const logos = [
    {
      name: 'html',
      img: 'html5/html5-original-wordmark.svg',
    },
    {
      name: 'css',
      img: 'css3/css3-original-wordmark.svg',
    },
    {
      name: 'js',
      img: 'javascript/javascript-original.svg',
    },
    {
      name: 'logoReact',
      img: 'react/react-original-wordmark.svg',
    },
  ];

  return (
    <div className="container">
      <div id="skills" className={styles.skills}>
        <h1>Minhas Skills</h1>

        <section>
          {logos.map((logo) => (
            <div key={logo.name} className={styles.logo}>
              <img src={`${devicons}${logo.img}`} alt={logo.name} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
