const fs            = require('fs');
const TEST_DIR_SRC          = `${__dirname}\\id45eres4774561w`;
const EXPECTED_FILE_LENGTH  = 5;
let isTestPass              = true;


const scenior1FileList = fs.readdirSync(TEST_DIR_SRC);
console.log(scenior1FileList);


if(scenior1FileList.length != EXPECTED_FILE_LENGTH) {
    isTestPass = false;
}


for(const fileName of scenior1FileList) {
        
    if(!isFileNameInTheList(fileName)) {
        isTestPass = false;
    }
}

assertIsTrue(true, isTestPass, 'Assert all files exists');


function isFileNameInTheList(fileName) {


    if(fileName == 'main'       ) return true;
    if(fileName == 'capacity'   ) return true;
    if(fileName == 'traffic'    ) return true;
    if(fileName == 'click'      ) return true;
    if(fileName == 'volume'     ) return true;

    return false;
}


function assertIsTrue(expect, result, message) {
    
    if(expect == result) {
        console.log(`Pass - ${message}`);
    }
    else {
        console.error(`Fail - Expected result ${expect}, resulted - ${result}`);
    }
}
