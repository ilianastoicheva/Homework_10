const { clear } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');
const fileName          = `${__dirname}\\id45eres4774561w\\traffic`;
let isTestPass              = true;
const contents = readFileSync(fileName, 'utf-8');
isTestPass = contents.includes("http://qa_auto.com");
  


assertIsTrue(true, isTestPass, 'File traffic - contains the web address http://qa_auto.com');
function assertIsTrue(expect, result, message) {
    
    if(expect == result) {
        console.log(`Pass - ${message}`);
    }
    else {
        console.error(`Fail - Expected result ${expect}, resulted - ${result}`);
    }
}