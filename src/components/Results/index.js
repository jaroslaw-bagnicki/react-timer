import React from 'react';
import PropTypes from 'prop-types';

export const Results = ({laps}) => (
  <ul>
    {laps.map(lap => (<li key={lap.no}>Lap{lap.no}: {lap.time}</li>))}
  </ul>
);

Results.propTypes = {
  laps: PropTypes.arrayOf(PropTypes.shape({
    no: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired
  }))
};
