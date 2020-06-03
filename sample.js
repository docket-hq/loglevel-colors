const log = require('./index')('Sample');

log.trace(`I'm a trace message!`);
log.debug(`I'm a debug message!`);
log.info(`I'm a info message!`);
log.warn(`I'm a warn message!`);
log.error(`I'm a error message!`);