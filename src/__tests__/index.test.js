
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Stopwatch from '..';

Enzyme.configure({ adapter: new Adapter() });

const noop = () => undefined;

describe('ReactStopwatch', () => {
  it('It renders without breaking using render as property', () => {
    const wrapper = shallow(
      <Stopwatch
        seconds={0}
        minutes={0}
        hours={0}
        limit="00:00:10"
        withLoop
        // eslint-disable-next-line no-console
        onCallback={() => console.log('Finish')}
        render={noop}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('It renders without breaking using render as children elements', () => {
    const wrapper = shallow(
      <Stopwatch
        seconds={0}
        minutes={0}
        hours={0}
        limit="00:00:10"
        withLoop
        // eslint-disable-next-line no-console
        onCallback={() => console.log('Finish')}
        render={noop}
      >
        {() => <div />}
      </Stopwatch>,
    );

    expect(wrapper).toMatchSnapshot();
  });


  it('should start to works', (done) => {
    const wrapper = shallow(
      <Stopwatch
        seconds={0}
        minutes={0}
        hours={0}
        limit="00:00:10"
        withLoop
        // eslint-disable-next-line no-console
        onCallback={() => console.log('Finish')}
        render={noop}
      />,
    );

    expect(wrapper.state().stateHours).toBe(0);
    expect(wrapper.state().stateHours).toBe(0);
    expect(wrapper.state().stateMinutes).toBe(0);

    setTimeout(() => {
      expect(wrapper.state().stateSeconds).toBe(1);
      done();
    }, 1100);
  });

  it('should call to onCallback function', (done) => {
    const onFinish = () => {
      expect(true).toBe(true);
      done();
    };

    shallow(
      <Stopwatch
        seconds={0}
        minutes={0}
        hours={0}
        limit="00:00:03"
        withLoop={false}
        onCallback={onFinish}
        render={noop}
      />,
    );
  });

  it('should dont make a loop if withLoop is false ', (done) => {
    const wrapper = shallow(
      <Stopwatch
        seconds={0}
        minutes={0}
        hours={0}
        limit="00:00:02"
        withLoop={false}
        render={noop}
      />,
    );

    setTimeout(() => {
      expect(wrapper.state().stateSeconds).toBe(2);
      done();
    }, 2100);
  });

  it('should change to 1 minute', (done) => {
    const wrapper = shallow(<Stopwatch
      seconds={58}
      minutes={0}
      hours={0}
      limit="00:01:00"
      withLoop={false}
      render={noop}
    />);

    setTimeout(() => {
      expect(wrapper.state().stateMinutes).toBe(1);
      done();
    }, 2100);
  });

  it('should change to 1 hour', (done) => {
    const wrapper = shallow(
      <Stopwatch
        seconds={58}
        minutes={59}
        hours={0}
        limit="01:00:00"
        withLoop={false}
        render={noop}
      />,
    );

    setTimeout(() => {
      expect(wrapper.state().stateHours).toBe(1);
      done();
    }, 2100);
  });
});
