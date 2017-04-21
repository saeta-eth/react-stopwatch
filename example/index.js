// @flow

import React from 'react';
import ReactDom from 'react-dom';
import Stopwatch from '../src/index';

ReactDom.render(
  <div>
    <Stopwatch
      seconds={0}
      minutes={0}
      hours={0}
     />    
  </div>,
  document.getElementById('app')
);
