import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.style.module.scss';

export const Button = ({onClick, color, disabled, children}) => (
  <button onClick={onClick} className={[styles.button, styles[color]].join(' ')} disabled={disabled}>{children}</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
