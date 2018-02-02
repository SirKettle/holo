import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { actions as routerActions } from 'redux-router5';
// import { trackClick } from '../../domains/ui/uiActions';
import styles from './Navigation.css';
import Button from '../../components/Button/Button';
import * as site from '../../constants/site';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  // track: (key, data) => { trackClick(dispatch, key, data); },
  navigateTo: (name, params) => dispatch(routerActions.navigateTo(name, params))
});

const headerLinks = [
  { name: '__root__', label: 'Home' },
  { name: 'about', label: 'About' }
];

export const Navigation = ({
  className,
  // track,
  navigateTo
}) => {
  return (
    <div className={classnames(className, styles.header)}>
      <div className={styles.menu}>
        {
          headerLinks
            .map((headerLink) => {
              const isSelected = true;
              return (
                <Button
                  key={headerLink.name}
                  onClick={() => {
                    navigateTo(headerLink.name);
                  }}
                  className={classnames(styles.button, { [styles.selected]: isSelected })}
                >{headerLink.label}</Button>
              );
            })
        }
      </div>
      <div className={classnames(styles.button, styles.telNo)}>{site.claireMobile}</div>
    </div>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  // track: PropTypes.func,
  navigateTo: PropTypes.func
};

Navigation.defaultProps = {
  className: 'header',
  // track: () => {},
  navigateTo: () => {}
};

export const Connected = connect(mapStateToProps, mapDispatchToProps)(Navigation);
