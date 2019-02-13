import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({onClick, color, disabled, children}) => (
  <button onClick={onClick} className={color} disabled={disabled}>{children}</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
