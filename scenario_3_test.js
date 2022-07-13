const { clear } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');
const fileName          = `${__dirname}\\id45eres4774561w\\main`;
let isTestPass              = true;
const contents = readFileSync(fileName, 'utf-8');
isTestPass = contents.includes("id45eres4774561w");
  

  assertIsTrue(true, isTestPass, 'The string id45eres4774561w exists in file main.js');
function assertIsTrue(expect, result, message) {
    
    if(expect == result) {
        console.log(`Pass - ${message}`);
    }
    else {
        console.error(`Fail - Expected result ${expect}, resulted - ${result}`);
    }
}