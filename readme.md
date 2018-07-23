# Debug log

Lightweight debug logging to console, tty, file etc. 
With console.log, console.warn, console.error etc. semantics

# Features

Work in progress

* &#10005; Namespaces toggling and highlighting
* &#10004; Colors
* &#10004; Support loggers for browser, node, react, react-native debug console, files
* &#10005; Custom loggers middleware
* &#10004; Correct Line numbers in browser console, tty, file and node, react or react-native debug console
* &#10004; Time difference in ms between debug calls per namespace

# Install

```
yarn add debug-log
```

# Usage

```
// globally enable debug if in dev mode
if (global.__DEV__ || process.env.NODE_ENV === 'development') {
  require('debug-log').enable('myapp:*')
  // require('debug-log').use(console) // custom logger
}

const debug = require('debug-log')('myapp:component:api')
debug.log('Initializing')
fetch('https://example.com/api')
  .then(() => debug.log('Api request success'))
  .catch(() => debug.warn('Network error'))

```

