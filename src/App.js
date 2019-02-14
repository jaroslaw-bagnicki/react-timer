import React, { Component } from 'react';
import styles from './App.styles.module.scss';

import { Button } from './components/Button';
import { Results } from './components/Results';

import { Time } from './models/Time';

export class App extends Component {
  state = {
    isRunning: false,
    startTimestap: null,
    actualTimestap: null,
    stopTimeDiff: new Time(),
    laps: [],
    timerInterval: null
  }

  render() {
    const { isRunning, stopTimeDiff, laps } = this.state;
    return (
      <div className={styles.container}>
        <div>
          <Button onClick={this.start} color="green" disabled={isRunning}>Start</Button>
          <Button onClick={this.lap} color="yellow" disabled={!isRunning}>Lap</Button>
          <Button onClick={this.stop} color="red" disabled={!isRunning}>Stop</Button>
        </div>

        <div className={styles.timer}>
          {(isRunning ? this.getTimeDiff() : stopTimeDiff).toString()}
        </div>

        <div className={styles.results}>
          <Button onClick={this.clear} disabled={(!(!!laps.length || !(stopTimeDiff.value === null)))}>Clear results</Button>
          <Results laps={laps} />
        </div>
      </div>
    );
  }

  start = () => {
    this.setState({
      isRunning: true,
      startTimestap: Date.now(),
      actualTimestap: Date.now(),
      timerInterval: setInterval(() => this.setState({actualTimestap: Date.now()}), 90),
      laps: []
    });
  }

  lap = () => {
    this.setState( ({laps}) => ({laps: [...laps, {no: laps.length + 1, time: this.getTimeDiff()}]}));
  }

  stop = () => {
    this.setState(({timerInterval}) => ({
      isRunning: false,
      startTimestap: null,
      actualTimestap: null,
      stopTimeDiff: this.getTimeDiff(),
      timerInterval: clearInterval(timerInterval)
    }));
  }

  clear = () => {
    this.setState({
      stopTimeDiff: new Time(),
      laps: []
    });
  }

  getTimeDiff = () => new Time(this.state.actualTimestap - this.state.startTimestap);
}
