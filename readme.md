# Debug log

Lightweight debug logging to console, tty, file etc. 

# Features

* Currently only tested in React Native, though should work in React and browsers. 

Work in progress

* &#10005; Namespaces toggling and highlighting
* &#10004; Colors
* &#10004; Support loggers for browser, node, react, react-native debug console, files
* &#10005; Custom loggers middleware
* &#10004; Correct Line numbers in browser console, tty, file and node, react or react-native debug console
* &#10004; Time difference in ms between debug calls per namespace
* &#10005; With console.log, console.warn, console.error etc. semantics

# Install

```
yarn add https://github.com/fijiwebdesign/rn-debug-log
```

# Usage

```

const debug = require('rn-debug-log')('myapp:component:api')
debug('Initializing')
fetch('https://example.com/api')
  .then(() => debug('Api request success'))
  .catch(() => debug.warn('Network error'))

```

# Enable 

Currently `rn-debug-log` is only enabled when `__DEV__` is true. 

## Future API

```
// globally enable debug if in dev mode
if (global.__DEV__ || process.env.NODE_ENV === 'development') {
  require('rn-debug-log').enable('myapp:*')
  require('rn-debug-log').use(console) // custom logger
}
```

