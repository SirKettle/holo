import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Content from '../Content/Content';
import typography from '../../css/typography.css';
import styles from './Footer.css';
import * as site from '../../constants/site';
import logoDbs from '../../assets/images/dbs.png';
import logoBccs from '../../assets/images/bccs.jpg';
import logoFirstaid from '../../assets/images/firstaid.jpg';
import logoCliverton from '../../assets/images/cliverton.jpg';
import findUsOnFacebookLogo from '../../assets/FB-FindUsonFacebook-online-512.png';

const renderers = {
  heading: args => (
    <p className={classnames(typography.smallMargins, typography.hattie)}>
      <strong>{args.children}</strong>
    </p>),
  paragraph: args => (
    <p className={classnames(typography.smallMargins, typography.puppy)}>{args.children}</p>)
};

const markdown = `
  ### &copy; ${site.name} ${new Date().getUTCFullYear()}
  
  ${site.description}

  _${site.strap}_
  
  Please call Claire on ${site.claireMobile}
`;

const Footer = ({
  className
}) => (
  <div className={classnames(styles.footer, className)}>
    <div className={classnames(styles.logos, className)}>
      <div className={styles.logo} style={{ backgroundImage: `url(${logoBccs})` }} />
      <div className={styles.logo} style={{ backgroundImage: `url(${logoDbs})` }} />
      <div className={styles.logo} style={{ backgroundImage: `url(${logoCliverton})` }} />
      <div className={styles.logo} style={{ backgroundImage: `url(${logoFirstaid})` }} />
    </div>
    <div className={classnames(styles.legal, className)}>
      <div className={styles.findUsOnFacebook}>
        <a className={styles.findUsOnFacebookLink} href={site.facebookPage} rel="noopener noreferrer" target="_blank">
          <img src={findUsOnFacebookLogo} alt="Find us on Facebook" className={styles.findUsOnFacebookLogo} />
        </a>
      </div>
      <Content markdown={markdown} renderers={renderers} />
    </div>
  </div>
);

Footer.propTypes = {
  className: PropTypes.string
};

Footer.defaultProps = {
  className: null
};

export default Footer;
