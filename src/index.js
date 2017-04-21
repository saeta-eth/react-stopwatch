/* @flow */

import React, { Component } from 'react';

type Props = {
  seconds: number,
  minutes: number,
  hours: number,
  type?: string
};

type State = {
  text: string
};


class StopWatch extends Component {
  props: Props;
  state: State;

  constructor(props: Props): void {
    super(props);

    const {
      hours,
      minutes,
      seconds,
    } = props;

    let finalHours;
    if (hours > 9) {
      finalHours = hours;
    } else {
      finalHours = `0${hours}`;
    }

    let finalMinutes;
    if (minutes > 9) {
      finalMinutes = minutes;
    } else {
      finalMinutes = `0${minutes}`;
    }

    let finalSeconds;
    if (seconds > 9) {
      finalSeconds = seconds;
    } else {
      finalSeconds = `0${seconds}`;
    }

    this.state = {
      text: `${finalHours}:${finalMinutes}:${finalSeconds}`,
    };
  }

  componentDidMount(): void {

  }

  componentWillReceiveProps(newProps: Props): void {

  }

  componentWillUnmount(): void {

  }

  timer(): void {

  }

  counter(): void {

  }

  render(): ?React$Element<*> {
    const {
      text,
    } = this.state;
    return (
      <h1>
        <strong>{text}</strong>
      </h1>
    );
  }
}

export default StopWatch;
