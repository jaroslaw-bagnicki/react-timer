import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({children, onClick, color}) => (
  <button onClick={onClick} className={color}>{children}</button>
);
