 /* @flow */

import React, { Component } from 'react';
import Radium from 'radium';
import _ from 'lodash';
import { fillTextWithFormat } from './utils';
import type { Props, State } from './types';

class StopWatch extends Component<Props, State> {
  static defaultProps = {
    defaultStyles: {
      base: {
        fontSize: '18px',
        display: 'inline-block',
        height: '150px',
        width: '150px',
      },
      primary: {
        containerOutter: {
          background: '#0f222b',
          borderRadius: '50%',
          border: '2px solid #8bc34a',
          margin: 'auto',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          position: 'absolute',
        },
        containerInner: {
          color: '#69ca62',
          textAlign: 'center',
          lineHeight: '5',
        },
      },
      secondary: {
        containerOutter: {
          background: '#122129',
          border: '2px solid #8bc34a',
          margin: 'auto',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          position: 'absolute',
        },
        containerInner: {
          color: '#2dba77',
          textAlign: 'center',
          lineHeight: '5',
        },
      },
    },
    custom: {},
    theme: 'primary',
    withLoop: false,
    onCallback: () => {},
  };
  intervalId: IntervalID;

  constructor(props: Props): void {
    super(props);

    const {
      hours,
      minutes,
      seconds,
    } = props;

    const text: string = fillTextWithFormat(hours, minutes, seconds);

    this.intervalId = setInterval(() => {}, Number.MAX_VALUE);
    this.state = {
      text,
      stateHours: hours,
      stateMinutes: minutes,
      stateSeconds: seconds,
    };
  }

  componentWillReceiveProps(): void {
    this.intervalId = setInterval(() => {}, Number.MAX_VALUE);
    this.setState({
      stateHours: 0,
      stateMinutes: 0,
      stateSeconds: 0,
    });
  }

  componentDidMount(): void {
    this.timer();
  }

  componentWillUnmount(): void {
    this.stopToCount();
  }

  stopToCount() {
    const {
      hours,
      minutes,
      seconds,
    } = this.props;

    clearInterval(this.intervalId);

    const text: string = fillTextWithFormat(hours, minutes, seconds);

    this.setState({
      text,
      stateHours: hours,
      stateMinutes: minutes,
      stateSeconds: seconds,
    });
  }

  counter(): void {
    const {
      limit,
      withLoop,
      onCallback,
    } = this.props;

    const {
      stateHours,
      stateMinutes,
      stateSeconds,
    } = this.state;

    this.setState(prevState => ({
      stateSeconds: prevState.stateSeconds + 1,
    }));
    if (stateSeconds >= 60) {
      this.setState(prevState => ({
        stateSeconds: 0,
        stateMinutes: prevState.stateMinutes + 1,
      }));

      if (stateMinutes >= 60) {
        this.setState(prevState => ({
          stateMinutes: 0,
          stateHours: prevState.stateHours + 1,
        }));
      }
    }

    const text: string = fillTextWithFormat(stateHours, stateMinutes, stateSeconds);

    this.setState({
      text,
    });

    if (limit === text) {
      this.stopToCount();
      if (withLoop) {
        this.timer();
      }
      onCallback();
    }
  }

  timer(): void {
    // @slorenzo: setInterval return a number.
    const intervalId: IntervalID = setInterval(() => {
      this.counter();
    }, 1000);

    this.intervalId = intervalId;
  }

  render() {
    const {
      defaultStyles,
      theme,
      custom,
    } = this.props;

    const {
      text,
    } = this.state;

    const custumStyles = _.defaults(custom, {
      containerOutter: {},
      containerInner: {},
    });

    return (
      <div
        style={[
          defaultStyles.base,
          defaultStyles[theme].containerOutter,
          custumStyles.containerOutter,
        ]}
      >
        <div
          style={[
            defaultStyles[theme].containerInner,
            custumStyles.containerInner,
          ]}
        >
          <h3>{text}</h3>
        </div>
      </div>
    );
  }
}

export default Radium(StopWatch);
