import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.style.module.scss';

export const Button = ({onClick, name, disabled, children}) => (
  <button name={name} onClick={onClick} className={[styles.button, styles[name]].join(' ')} disabled={disabled}>{children}</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
