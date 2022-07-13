const { clear } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');
const fileName         = `${__dirname}\\id45eres4774561w\\click`;
let isTestPass         = true;
const contents         = readFileSync(fileName, 'utf-8');
const contentsNum      = +contents;
if(contents >= 200){
isTestPass = true;
} else {isTestPass = false;}

assertIsTrue(true, isTestPass, 'The value in file click is valid ');
function assertIsTrue(expect, result, message) {
    
if(expect == result) {
   console.log(`Pass - ${message}`);
}
   else {
      console.error(`Fail - Expected result ${expect}, resulted - ${result}`);
   }
}