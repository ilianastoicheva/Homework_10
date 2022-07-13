
const fs            = require('fs');
const dir                   = './id45eres4774561w';
let isTestPass              = true;

if (!fs.existsSync(dir)) {
    isTestPass = false;
} 

assertIsTrue(true, isTestPass, 'The folder with name id45eres4774561w exists');
function assertIsTrue(expect, result, message) {
    
    if(expect == result) {
        console.log(`Pass - ${message}`);
    }
    else {
        console.error(`Fail - Expected result ${expect}, resulted - ${result}`);
    }
}