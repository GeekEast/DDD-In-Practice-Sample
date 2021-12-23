const createDebug = require('debug');

const info = createDebug('info');
const warn = createDebug('warn');
const error = createDebug('error');

export const Logger = { info, warn, error };
