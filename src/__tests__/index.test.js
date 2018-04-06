import React from 'react';
import renderer from 'react-test-renderer';
import Stopwatch from '../';

describe('Stopwatch', () => {
  it('renders correctly', () => {
    const stopwatch = renderer.create(<Stopwatch
      seconds={0}
      minutes={0}
      hours={0}
      limit="00:00:10"
      withLoop
      // eslint-disable-next-line no-console
      onCallback={() => console.log('Finish')}
    />);

    expect(stopwatch.toJSON()).toMatchSnapshot();
  });

  it('should start to works', (done) => {
    const stopwatch = renderer.create(<Stopwatch
      seconds={0}
      minutes={0}
      hours={0}
      limit="00:00:10"
      withLoop
      // eslint-disable-next-line no-console
      onCallback={() => console.log('Finish')}
    />);

    const stopwatchInstance = stopwatch.getInstance();

    expect(stopwatchInstance.state.stateHours).toBe(0);
    expect(stopwatchInstance.state.stateMinutes).toBe(0);
    expect(stopwatchInstance.state.stateSeconds).toBe(0);

    setTimeout(() => {
      expect(stopwatchInstance.state.stateSeconds).toBe(1);
      done();
    }, 1100);
  });

  it('should call to onCallback function', (done) => {
    const onFinish = () => {
      expect(true).toBe(true);
      done();
    };

    renderer.create(<Stopwatch
      seconds={0}
      minutes={0}
      hours={0}
      limit="00:00:03"
      withLoop={false}
      onCallback={onFinish}
    />);
  });

  it('should dont make a loop if withLoop is false ', (done) => {
    const stopwatch = renderer.create(<Stopwatch
      seconds={0}
      minutes={0}
      hours={0}
      limit="00:00:02"
      withLoop={false}
    />);

    const stopwatchInstance = stopwatch.getInstance();
    setTimeout(() => {
      expect(stopwatchInstance.state.stateSeconds).toBe(2);
      done();
    }, 2100);
  });

  it('should change to 1 minute', (done) => {
    const stopwatch = renderer.create(<Stopwatch
      seconds={58}
      minutes={0}
      hours={0}
      limit="00:01:00"
      withLoop={false}
    />);

    const stopwatchInstance = stopwatch.getInstance();
    setTimeout(() => {
      expect(stopwatchInstance.state.stateMinutes).toBe(1);
      done();
    }, 2100);
  });

  it('should change to 1 hour', (done) => {
    const stopwatch = renderer.create(<Stopwatch
      seconds={58}
      minutes={59}
      hours={0}
      limit="01:00:00"
      withLoop={false}
    />);

    const stopwatchInstance = stopwatch.getInstance();
    setTimeout(() => {
      expect(stopwatchInstance.state.stateHours).toBe(1);
      done();
    }, 2100);
  });
});
