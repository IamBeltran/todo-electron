/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │  REQUIRE THIRDPARTY-MODULES DEPENDENCY.                                           │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const log = require('fancy-log');
const colors = require('ansi-colors');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DESTRUCTURING DEPENDENCIES.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const { green } = colors;

//  ──[ EXPORT MODULE ]──────────────────────────────────────────────────────────────────
module.exports = gulp => () => {
  log(green('Default Task...'));
};
