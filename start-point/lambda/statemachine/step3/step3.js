//const run = require('./opt/code/test');

exports.handler = (event, context, callback) => {

    console.log("Step 3 start");
    const fs = require('fs')

    // directory to check if exists
    const dir = './opt'

    if (fs.existsSync(dir)) {
        console.log('Directory exists!')
    } else {
        console.log('Directory not found.')
    }

    checkFolder('./opt');
    checkFolder('./opt/code/test');
    checkFolder('opt');
    checkFolder('code');
    checkFolder('nodejs');

    //run(event, context, callback);
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