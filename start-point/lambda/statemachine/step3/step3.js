const test = require('/opt/util/test.js');
const db = require('/opt/util/db.js');

exports.handler = (event, context, callback) => {

    console.log("Step 3 start");

    checkFilesInFolder('./');
    checkFolder('test');
    checkFolder('/test');
    checkFolder('./test');

    checkFilesInFolder('../');
    checkFolder('opt');
    checkFolder('../opt');

    checkFilesInFolder('../opt');

    checkFilesInFolder('../../');

    test.run();
    db.put(event, context, callback);
    console.log("Step 3 end");

    event.from = "Step 3";
    callback(null, event)
};

// check if directory exists
let checkFolder = (name) => {
    const fs = require('fs')

    if (fs.existsSync(name)) {
        console.log(name + ' directory exists!')
    } else {
        console.log(name + ' directory not found.')
    }
}

// check files in directory
let checkFilesInFolder = (folderPath) => {
    const fs = require('fs')
    var files = fs.readdirSync(folderPath);
    console.log('Files in ' + folderPath + ': ' + files);
}