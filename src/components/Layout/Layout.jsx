import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Connected as Navigation } from '../../containers/Navigation/Navigation';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import styles from './Layout.css';
import logoText from '../../assets/images/logo-text_1000x352.png';
import logoAnimals from '../../assets/images/logo-animals_924x824.png';

const Layout = ({
  className,
  children,
  hero,
  heroCopy,
  heroCopyClassName
}) => (
  <div className={classnames(styles.layout, className)}>
    <div className={styles.header}>
      <img
        className={styles.logoText}
        src={logoText}
        alt="holo-holo"
      />
      <img
        className={styles.logoAnimals}
        src={logoAnimals}
        alt="holo-holo"
      />
    </div>
    <Navigation className={styles.nav} />
    <div className={styles.heroWrapper}>
      {
        hero
        ? <img className={styles.hero} src={hero} alt="holo-holo hero" />
        : null
      }
      {
        hero && heroCopy
        ? <Content markdown={heroCopy} className={classnames(styles.heroCopy, heroCopyClassName)} />
        : null
      }
    </div>
    <div className={styles.content}>
      { children }
    </div>
    <div className={styles.border} />
    <Footer className={styles.footer} />
  </div>
);

Layout.propTypes = {
  className: PropTypes.string,
  hero: PropTypes.string,
  heroCopy: PropTypes.string,
  heroCopyClassName: PropTypes.string,
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  className: null,
  hero: null,
  heroCopy: null,
  heroCopyClassName: null
};

export default Layout;
