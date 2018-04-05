// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from '../src/index';

const styles = {
  containerOutter: {
    width: '250px',
    height: '250px'
  },
  containerInner: {
    lineHeight: '10'
  }
}

ReactDOM.render(
  <Stopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit={"00:00:10"}
    withLoop={true}
    onCallback={() => console.log('Finish')}
   />,
  document.getElementById('app')
);
