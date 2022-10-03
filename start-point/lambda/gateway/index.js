var aws = require('aws-sdk')

exports.handler = (event, context, callback) => {
    console.log('gateway function log');
    console.log(event);
    console.log(event.body);
    const obj = JSON.parse(event.body);
    console.log(obj.value);

    let firstStateMachineArn = process.env.firstStateMachineArn;

    let params = {
        stateMachineArn: firstStateMachineArn,
        input: event.body
    };
    //await!!!
    let stepfunctions = new aws.StepFunctions()
    stepfunctions.startExecution(params, (err, data) => {
        if (err) {
            console.log(err);
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'There was an error'
                })
            };
            callback(null, response);
        } else {
            console.log(data);
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Something worked'
                })
            };
            callback(null, response);
        }
    });
}