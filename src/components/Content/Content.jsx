import React, { PropTypes } from 'react';
import Markdown from 'react-markdown';
import classnames from 'classnames';
import typography from '../../css/typography.css';
import styles from './Content.css';

const getHeadingClass = (level) => {
  return [
    typography.ben,
    typography.samson,
    typography.beau,
    typography.harvey
  ][level - 1];
};

const defaultRenderers = {
  heading: args => (
    React.createElement(`h${args.level}`, {
      className: classnames(typography.bottomMargin, getHeadingClass(args.level))
    }, args.children)),
  paragraph: args => (
    <p className={classnames(typography.bottomMargin, typography.hattie)}>{args.children}</p>),
  listItem: args => (
    <li className={classnames(typography.bottomMargin, typography.hattie)}>{args.children}</li>),
  list: args => (
    React.createElement(args.ordered ? 'ol' : 'ul', {
      className: classnames(styles.list, args.ordered ? styles.ol : styles.ul)
    }, args.children)),
  image: args => (
    <img
      className={classnames(typography.bottomMargin, styles.image)}
      src={args.src}
      alt={args.alt}
    />
  )
};

const Content = ({
  className,
  markdown,
  renderers
}) => (
  <Markdown
    className={className}
    source={markdown}
    renderers={renderers}
  />
);

Content.propTypes = {
  className: PropTypes.string,
  /* eslint react/forbid-prop-types: 0 */
  renderers: PropTypes.object,
  markdown: PropTypes.string.isRequired
};

Content.defaultProps = {
  className: null,
  renderers: defaultRenderers
};

export default Content;
