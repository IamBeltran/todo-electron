/* eslint-disable prettier/prettier */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │  COMMANDS FOR CONCURRENTLY.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const commands = [
  // 0
  {
    command: 'echo "HELLO WORLD"',
    name: '000',
    prefixColor: 'green',
  },
  // 1
  {
    command: 'echo "THIS IS A TASK DEFAULT"',
    name: '001',
    prefixColor: 'blue',
  },
  // 2
  {
    command: 'echo "I AM A TEST"',
    name: '002',
    prefixColor: 'green',
  },
  // 3
  {
    command: 'echo "SOY UNA PRUEBA"',
    name: '003',
    prefixColor: 'blue',
  },
  // 4
  {
    command: 'yarn start',
    name: 1,
    prefixColor: 'green',
  },
  // 5
  {
    command: 'wait-on http://localhost:3000 && electron .',
    name: 2,
    prefixColor: 'blue',
  },
];

//  ──[ EXPORT MODULES  ]────────────────────────────────────────────────────────────────
module.exports = commands;
