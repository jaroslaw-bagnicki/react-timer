import React from 'react';
import PropTypes from 'prop-types';
import styles from './Results.style.module.scss';
import { Time } from '../../models/Time';

export const Results = ({laps}) => (
  <ul className={styles.container}>
    {laps.map(lap => (<li key={lap.no} className={styles.listElement}>Lap {lap.no}: {`${lap.time}`}</li>))}
  </ul>
);

Results.propTypes = {
  laps: PropTypes.arrayOf(PropTypes.shape({
    no: PropTypes.number.isRequired,
    time: PropTypes.instanceOf(Time).isRequired
  }))
};
