import React, { Component } from 'react';
import styles from './App.styles.module.scss';

import { Button } from '../Button';
import { Results } from '../Results';

export class App extends Component {
  state = {
    isRunning: false,
    startTimestap: null,
    actualTimestap: null,
    stopTimeText: '',
    laps: [],
    timerInterval: null
  }

  render() {
    const { isRunning, stopTimeText, laps } = this.state;
    return (
      <div className={styles.container}>
        <div>
          <Button onClick={this.start} color="green" disabled={isRunning}>Start</Button>
          <Button onClick={this.lap} color="yellow" disabled={!isRunning}>Lap</Button>
          <Button onClick={this.stop} color="red" disabled={!isRunning}>Stop</Button>
        </div>

        <div className={styles.timerLabel}>
          {isRunning ? this.renderTime() : stopTimeText || '--:--:--'}
        </div>

        <div>
          <Button onClick={this.clear} disabled={(!(!!laps.length || !!stopTimeText))}>Clear results</Button>
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
    this.setState( ({laps}) => ({laps: [...laps, {no: laps.length + 1, time: this.renderTime()}]}));
  }

  stop = () => {
    this.setState(({timerInterval}) => ({
      isRunning: false,
      startTimestap: null,
      actualTimestap: null,
      stopTimeText: this.renderTime(),
      timerInterval: clearInterval(timerInterval)
    }));
  }

  clear = () => {
    this.setState({
      stopTimeText: '',
      laps: []
    });
  }

  calcTime = () => {
    const { startTimestap, actualTimestap } = this.state;
    let diff = Math.round((actualTimestap - startTimestap) / 10);
    const cs = diff % 100;
    diff = (diff - cs) / 100;
    const s = diff % 60;
    const m = (diff - s) / 60;
    return {m, s, cs};
  }

  renderTime = () => {
    const {m, s, cs} = this.calcTime();
    const format = (number) => number.toString().padStart(2, '0');
    return `${format(m)}:${format(s)}:${format(cs)}`;
  }
}
