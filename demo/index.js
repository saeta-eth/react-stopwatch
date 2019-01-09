// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import ReactStopwatch from '../src/index';

ReactDOM.render(
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit="00:00:10"
    onCallback={() => console.log('Finish')}
    withLoop
  >
    {({ formatted }) => (
      <div>{ formatted }</div>
    )}
  </ReactStopwatch>,
  document.getElementById('app'),
);
