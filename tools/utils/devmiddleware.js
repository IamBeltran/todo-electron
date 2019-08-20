/* eslint-disable consistent-return */
/* eslint-disable no-multi-assign */
/* eslint-disable no-console */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │  REQUIRE THIRD-PARTY MODULES DEPENDENCY.                                          │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const colors = require('ansi-colors');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE MY-MODULES DEPENDENCIES.                                                  │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DESTRUCTURING DEPENDENCIES.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const { red, yellow, cyan } = colors;

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DECLARATION OF CONSTANTS-VARIABLES.                                               │
//  └───────────────────────────────────────────────────────────────────────────────────┘

// const checkMarkX = colors.red('[✘]');
// const checkMarkV = colors.green('[✓]');
const line = colors.gray('--------------------------------------------------------');
// const lineN = colors.gray('--------------------------------------------------------\n');
const Nline = colors.gray('\n--------------------------------------------------------');
// const NlineN = colors.gray('\n--------------------------------------------------------\n');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │  SET MIDDLEWARES.                                                                 │
//  └───────────────────────────────────────────────────────────────────────────────────┘

/**
 *
 * @name          showError
 * @description   Middleware for show errors
 * @param         {Error} error - Error for display
 * @param         {string} [context='CODE'] - Context where error occurs
 */
function showError(error, context = 'CODE') {
  const text1 = 'ERROR IN:'.padStart(10);
  const text2 = 'NAME:'.padStart(10);
  const text3 = 'MESSAGE:'.padStart(10);
  const text4 = 'ADD INFO:'.padStart(10);
  const text5 = 'STACK:'.padStart(10);
  const { name, message, stack, ...rest } = error;

  console.error(red(`${text1} ${context}`));
  if (name) {
    console.error(red(`${text2} ${name}`));
  }
  if (message) {
    console.error(red(`${text3} ${message}`));
  }
  if (Object.entries(rest).length !== 0 && rest.constructor === Object) {
    console.error(red(`${text4} \u2935${Nline}`));
    console.error(red(`${JSON.stringify(rest, null, 3)}${Nline}`));
  }
  if (stack) {
    const onlyStack = stack.replace(`${error.name}: ${error.message}\n`, '');
    console.error(red(`${text5} \u2935${Nline}`));
    console.error(red(`${onlyStack}${Nline}`));
  }
}

/**
 *
 * @name          showWarning
 * @description   Middleware for show Warnings
 * @param         {Error} warning - Warning for display
 * @param         {string} [context='CODE'] - Context where warning occurs
 */
function showWarning(warning, context = 'CODE') {
  const text1 = 'WARNING IN:'.padStart(12);
  const text2 = 'NAME:'.padStart(12);
  const text3 = 'MESSAGE:'.padStart(12);
  const text4 = 'STACK:'.padStart(12);

  console.warn(yellow(`${text1} ${context}`));
  if (warning.name) {
    const { name } = warning;
    console.warn(yellow(`${text2} ${name}`));
  }
  if (warning.message) {
    const { message } = warning;
    console.warn(yellow(`${text3} ${message}`));
  }
  if (warning.stack) {
    let { stack } = warning;
    stack = stack.replace(`${warning.name}: ${warning.message}\n`, '');
    console.warn(yellow(`${text4} \u2935${Nline}`));
    console.warn(yellow(`${stack}${Nline}`));
  }
}

/**
 *
 * @name          showLabel
 * @description   Middleware for show label proccess
 * @param         {string} processName - Name of process
 */
function showLabel(label) {
  console.log(`${cyan(` » ${label.toUpperCase()}`)}`);
  console.log(`${line}`);
}

/**
 *
 * @name          showData
 * @description   Middleware for show label proccess
 * @param         {*} data - Data or value for display
 */
function showData(data) {
  const type = Object.prototype.toString
    .call(data)
    .match(/\s([a-z|A-Z]+)/)[1]
    .toLowerCase();

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  console.log(`${cyan(` » TYPE: `)} ${type.toUpperCase()}`);
  if (type === 'object' || type === 'array') {
    console.log(`${cyan(` » VALUE:`)}`);
    console.log(`${JSON.stringify(data, getCircularReplacer(), 3)}`);
  } else if (type === 'set') {
    console.log(`${cyan(` » VALUE:`)}`);
    console.log(`${JSON.stringify(Array.from(data), getCircularReplacer(), 3)}`);
  } else {
    console.log(`${cyan(` » VALUE:`)} ${data}`);
  }
  console.log(`${line}`);
}
/**
 *
 *
 * @class ShowProcess
 */
class Show {
  constructor() {
    this.initTime = Date.now();
    this.count = 0;
  }

  /**
   *
   *
   * @param     {string} process - Name of process that show
   * @memberof ShowProcess
   */
  process(process) {
    this.count += 1;
    const number = `#${this.count}`;
    const numberLen = number.length;
    const processLen = process.length;
    const pad = 57 - 15 - numberLen - processLen;
    const time = `[${Date.now() - this.initTime} ms]`.padStart(pad);
    console.log(`${cyan(` » ${number} PROCESS: `)}${process.toUpperCase()} ${time}`);
    console.log(`${line}`);
  }
}

//  ──[ EXPORT MODULE ]──────────────────────────────────────────────────────────────────
const middleware = (module.exports = exports = {});

middleware.showError = showError;
middleware.showWarning = showWarning;
middleware.showLabel = showLabel;
middleware.showData = showData;
middleware.Show = Show;
