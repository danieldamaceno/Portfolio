import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as Img } from '../../assets/programming.svg';
import { RiCodeView } from 'react-icons/ri';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Header() {
  const urlWhats =
    'https://api.whatsapp.com/send?phone=5551995628379&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seu%20servi%C3%A7o.';

  const urlCV =
    'https://drive.google.com/file/d/1V9obxnzmJcRlU-p3g5ccxO0w1XTsEEnS/view';

  return (
    <header className="container">
      <div className={styles.Header}>
        <div className={styles.logo}>
          <h2>Portfólio</h2>
          <RiCodeView />
        </div>

        <nav className={styles.nav}>
          <AnchorLink href="#sobre">Sobre mim</AnchorLink>
          <AnchorLink href="#projetos">Projetos</AnchorLink>
          <AnchorLink href="#servicos">Serviços</AnchorLink>
          <AnchorLink href="#skills">Minhas Skills</AnchorLink>
        </nav>
      </div>

      <section className={styles.headerInfo}>
        <div className={styles.info}>
          <h1>Olá,</h1>
          <h1>Eu sou o Daniel Damaceno</h1>
          <p>Desenvolvedor Front-end</p>
          <button
            className={styles.download}
            onClick={() => (window.location.href = `${urlCV}`)}
          >
            Download CV
          </button>
          <button
            className={styles.entrar}
            onClick={() => (window.location.href = `${urlWhats}`)}
          >
            Entrar em contato
          </button>
        </div>

        <div className={styles.pageImg}>
          <Img className={styles.img} />
        </div>
      </section>
    </header>
  );
}
