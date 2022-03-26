#!/usr/bin/env node

const clearCon = require('clear-any-console');
const pacJSON = require('./package.json');

const chalk = require('chalk');

clearCon();

console.log(`
   ${pacJSON.description}

   Hello  ${chalk.red('!!!!')}

      My name is ${chalk.hex("#4aee88").bold.inverse(' Harshal yadav ')}.
      I'm a full stack web developer using MERN.
      I'v completed my graduation in ${chalk.hex('#3e22a6').italic('2021')} .
 
 
${chalk.hex('#1da1f2').bold.inverse(' linked in ')} ${chalk.dim('https://linkedin.com/Harshalyadav')}
${chalk.hex('#6cc644').bold.inverse(' github    ')} ${chalk.dim('https://github.com/Harshalyadav')}
  
 `);
 

 
 console.log(`
${chalk.hex("#f1279d").bold.inverse(' version ')} : ${pacJSON.version}
`);