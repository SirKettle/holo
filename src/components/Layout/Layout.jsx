import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Connected as Navigation } from '../../containers/Navigation/Navigation';
import Content from '../Content/Content';
import typography from '../../css/typography.css';
import styles from './Layout.css';
import * as site from '../../constants/site';

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
  children
}) => (
  <div className={classnames(styles.layout, className)}>
    <Navigation className={styles.nav} />
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
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  className: null
};

export default Layout;
