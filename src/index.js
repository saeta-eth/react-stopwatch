 /* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import _ from 'lodash';
import { fillTextWithFormat } from './utils';

type Props = {
  seconds: number,
  minutes: number,
  hours: number,
  theme: 'primary' | 'secondary',
  limit?: string,
  withLoop?: boolean,
  defaultStyles: any,
  custom: any,
  onCallback?: any,
};

type State = {
  text: string,
  stateHours: number,
  stateMinutes: number,
  stateSeconds: number,
  intervalId: number
};

class StopWatch extends Component {
  static defaultProps = {
    defaultStyles: {
      base: {
        fontSize: '18px',
        display: 'inline-block',
        margin: 'auto',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        position: 'absolute',
        height: '150px',
        width: '150px',
      },
      primary: {
        containerOutter: {
          background: '#0f222b',
          borderRadius: '50%',
          border: '2px solid #8bc34a',
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
        },
        containerInner: {
          color: '#2dba77',
          textAlign: 'center',
          lineHeight: '5',
        },
      },
      custom: {},
    },
    theme: 'primary',
    withLoop: false,
  };
  props: Props;
  state: State;

  constructor(props: Props): void {
    super(props);

    const {
      hours,
      minutes,
      seconds,
    } = props;

    const text: string = fillTextWithFormat(hours, minutes, seconds);

    this.state = {
      text,
      stateHours: hours,
      stateMinutes: minutes,
      stateSeconds: seconds,
      intervalId: 0,
    };
  }

  componentWillReceiveProps(): void {
    this.setState({
      stateHours: 0,
      stateMinutes: 0,
      stateSeconds: 0,
      intervalId: 0,
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

    const {
      intervalId,
    } = this.state;

    clearInterval(intervalId);

    const text: string = fillTextWithFormat(hours, minutes, seconds);

    this.setState({
      text,
      stateHours: hours,
      stateMinutes: minutes,
      stateSeconds: seconds,
      intervalId: 0,
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

    this.setState({
      stateSeconds: stateSeconds + 1,
    });
    if (stateSeconds >= 60) {
      this.setState({
        stateSeconds: 0,
        stateMinutes: stateMinutes + 1,
      });
      if (stateMinutes >= 60) {
        this.setState({
          stateMinutes: 0,
          stateHours: stateHours + 1,
        });
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
      if (typeof onCallback === 'function') {
        onCallback();
      }
    }
  }

  timer(): void {
    // TODO: setInterval return a number.
    const intervalId = setInterval(() => {
      this.counter();
    }, 1000);

    this.setState({
      intervalId,
    });
  }

  render(): ?React$Element<*> {
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
