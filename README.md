# React-Stopwatch

## Installation

First, install the component:

```bash
yarn add react-stopwatch
```
or
```bash
npm install react-stopwatch --save
```


### Usage

```js
import Stopwatch from 'react-stopwatch';
import ReactDom from 'react-dom';
import Stopwatch from '../src/index';

ReactDom.render(
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
```

### Customizacion


There are two themes:
- 'primary': The watch takes a circle way. (Default)
- 'secondary': The watch takes a square way.

```js
import Stopwatch from 'react-stopwatch';
import ReactDom from 'react-dom';
import Stopwatch from '../src/index';

ReactDom.render(
  <Stopwatch
    seconds={0}
    minutes={0}
    hours={0}
    theme='primary' // theme='secondary'
   />,
  document.getElementById('app')
);
```
If you want to do the watch would appears with you own styles. You just need to put your styles inside of `containerOutter` and `containerInner`.

```js
import Stopwatch from 'react-stopwatch';
import ReactDom from 'react-dom';
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

ReactDom.render(
  <Stopwatch
    seconds={0}
    minutes={0}
    hours={0}
    styles={styles}
   />,
  document.getElementById('app')
);
```

### Properties
- `seconds`: Integer. Needs to be between `0 >= seconds <= 60`. (Required)
- `minutes`: Integer. Needs to be between `0 >= minutes <= 60`. (Required)
- `hours`: Integer. Needs to be `0 >= hours`. (Required)
- `limit`: String. Need to have the following format `XX:XX:XX`. (Optional)
- `withLoop`: Boolean. If it is `true` when the watch is equal to `limit`, it makes a loop. (Optional)
- `onCallback`: Function. If you need to do something when the watch is equal to `limit`. (Optional)



## Made with ❤ by

- Sebastian Lorenzo (Javascript developer)
- E-mail: [SebastianLorenzo@gmail.com](mailto:SebastianLorenzo@gmail.com)
- StackOverflow: [sebastian-lorenzo](http://stackoverflow.com/users/1741027/sebastian-lorenzo?tab=profile)

## License

MIT license. Copyright © 2017.