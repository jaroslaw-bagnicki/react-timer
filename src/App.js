import React, { Component } from 'react';
import styles from './components/App.styles.module.scss';

import { Button } from './components/Button';
import { Timer } from './components/Timer';

export class App extends Component {
  state = {
    // TODO
  }

  render() {
    return (
      <div className={styles.container}>
        <div>
          <Button onClick={this.start} color="green">Start</Button>
          <Button onClick={this.lap} color="yellow">Lap</Button>
          <Button onClick={this.stop} color="red">Stop</Button>
        </div>
        <Timer />
        <div>
          <Button onClick={this.clear} color="dark">Clear results</Button>
          <ul id="results"></ul>
        </div>
      </div>
    );
  }

  start = () => {
    console.log('start()');
  }

  lap = () => {
    console.log('lap()');
  }

  stop = () => {
    console.log('stop()');
  }

  clear = () => {
    console.log('clear()');
  }
}
