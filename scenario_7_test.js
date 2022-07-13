const { clear } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

const fileNameMain          = `${__dirname}\\id45eres4774561w\\main`;
const personalId = readFileSync(fileNameMain, 'utf-8');

const fileNameClick          = `${__dirname}\\id45eres4774561w\\click`;
const clickRate = readFileSync(fileNameClick, 'utf-8');

const fileNameVolume          = `${__dirname}\\id45eres4774561w\\volume`;
const volumeResult = readFileSync(fileNameVolume, 'utf-8');

let isTestPass              = true;

const ipAddress = "192.168.1.1";
//console.log(personalId);
//console.log(clickRate);
//console.log(ipAddress);
const oll = ipAddress + "." + personalId + "." + clickRate;

if((oll == volumeResult)){
    isTestPass              = true;   
    console.log(oll);
} else { isTestPass= false;}

assertIsTrue(true, isTestPass, 'The "volume" file contains correct data');
function assertIsTrue(expect, result, message) {
    
  if(expect == result) {
       console.log(`Pass - ${message}`);
    }
    else {
        console.error(`Fail - Expected result ${expect}, resulted - ${result}`);
    }
}

  
