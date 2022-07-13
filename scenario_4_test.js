const { clear } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');
const fileName          = `${__dirname}\\id45eres4774561w\\capacity`;
let isTestPass              = true;
const contents = readFileSync(fileName, 'utf-8');
isTestPass = contents.includes("148");
  

  assertIsTrue(true, isTestPass, 'The number 148 exists in file capacity.js');
function assertIsTrue(expect, result, message) {
    
    if(expect == result) {
        console.log(`Pass - ${message}`);
    }
    else {
        console.error(`Fail - Expected result ${expect}, resulted - ${result}`);
    }
}