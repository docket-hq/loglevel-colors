# loglevel-colors
A pre-connfigured instance of loglevel with colors and prefixes

# Usage
The default loglevel is `DEBUG`, but this can be configured either by setting the 
env var `LOGLEVEL`, or passing the log level in as a second argument.

The possible log levels are: 

- TRACE
- DEBUG
- INFO
- WARN
- ERROR

## defaults
```javascript
const log = require('./index')('Sample');

log.trace(`I'm a trace message!`);
log.debug(`I'm a debug message!`);
log.info(`I'm a info message!`);
log.warn(`I'm a warn message!`);
log.error(`I'm a error message!`);

```

```
[Sample] DEBUG: I'm a debug message!
[Sample] INFO: I'm a info message!
[Sample] WARN: I'm a warn message!
[Sample] ERROR: I'm a error message!
```

## Setting WARN as the default level
```javascript
const log = require('./index')('Sample', 'WARN');

log.trace(`I'm a trace message!`);
log.debug(`I'm a debug message!`);
log.info(`I'm a info message!`);
log.warn(`I'm a warn message!`);
log.error(`I'm a error message!`);

```

```
[Sample] WARN: I'm a warn message!
[Sample] ERROR: I'm a error message!
```