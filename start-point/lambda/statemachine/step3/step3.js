//const run = require('./opt/code/test');

exports.handler = (event, context, callback) => {

    console.log("Step 3 start");
    const fs = require('fs')

// directory to check if exists
    const dir = './opt'

// check if directory exists
    if (fs.existsSync(dir)) {
        console.log('Directory exists!')
    } else {
        console.log('Directory not found.')
    }


    //run(event, context, callback);
    console.log("Step 3 end");
};