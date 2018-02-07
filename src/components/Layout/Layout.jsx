import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Connected as Navigation } from '../../containers/Navigation/Navigation';
import Content from '../Content/Content';
import typography from '../../css/typography.css';
import styles from './Layout.css';
import * as site from '../../constants/site';
import logoText from '../../assets/images/logo-text_1000x352.png';
import logoAnimals from '../../assets/images/logo-animals_924x824.png';

const footerRenderers = {
  heading: args => (
    <p className={classnames(typography.smallMargins, typography.hattie)}>
      <strong>{args.children}</strong>
    </p>),
  paragraph: args => (
    <p className={classnames(typography.smallMargins, typography.puppy)}>{args.children}</p>)
};

const footerMarkdown = `
  ### &copy; ${site.name} ${new Date().getUTCFullYear()}
  
  _${site.strap}_
  
  Please call Claire on ${site.claireMobile}
`;

const Layout = ({
  className,
  children,
  hero
}) => (
  <div className={classnames(styles.layout, className)}>
    <Navigation className={styles.nav} />
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
    {
      hero
      ? <img className={styles.hero} src={hero} alt="holo-holo hero" />
      : null
    }
    <div className={styles.content}>
      { children }
    </div>
    <div className={styles.footer}>
      <Content markdown={footerMarkdown} renderers={footerRenderers} />
    </div>
  </div>
);

Layout.propTypes = {
  className: PropTypes.string,
  hero: PropTypes.string,
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  className: null
};

export default Layout;
