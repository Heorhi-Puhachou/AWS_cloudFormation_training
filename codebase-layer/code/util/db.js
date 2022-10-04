const AWS = require('aws-sdk');
// We set region if DB in the non-same region as the stack
//const dynamodb = new AWS.DynamoDB({
//    region: 'us-east-1',
//    apiVersion: '2012-08-10'
//});

const dynamodb = new AWS.DynamoDB();

exports.put = (event, context, callback) => {

    console.log("Put data to DB");
    console.log(event);

    let createdDatetime = new Date();

    console.log(createdDatetime);

    const theDate = createdDatetime;
    const day = theDate.getUTCDate();
    const month = theDate.getUTCMonth() + 1;
    const twoDigitMonth = month < 10 ? "0" + month : month;
    const twoDigitDay = day < 10 ? "0" + day : day;
    const twoDigitYear = theDate.getUTCFullYear().toString().substr(2)
    const hours = theDate.getUTCHours();
    const twoDigitHours = hours < 10 ? "0" + hours : hours;
    const mins = theDate.getUTCMinutes();
    const twoDigitMins = mins < 10 ? "0" + mins : mins;
    const seconds = theDate.getUTCSeconds();
    const twoDigitSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedDate = `${twoDigitYear}.${twoDigitMonth}.${twoDigitDay}-${twoDigitHours}:${twoDigitMins}:${twoDigitSeconds}`;
    const dateId = `${twoDigitYear}${twoDigitMonth}${twoDigitDay}${twoDigitHours}${twoDigitMins}${twoDigitSeconds}`;

    console.log(formattedDate);
    console.log(event);
    console.log(event.Payload);
    console.log(event.Payload.value);

    let eventId = dateId;
    let eventTime = formattedDate;
    let eventMessage = event.Payload.value;
    let from = event.from;
    const params = {
        Item: {
            "EventId": {
                S: eventId
            },
            "EventTime": {
                S: eventTime
            },
            "EventMessage": {
                S: eventMessage
            }
        },
        TableName: "test-table"
    };

    console.log(params);

    dynamodb.putItem(params, function (err, data) {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            console.log(data);
            callback(null, data);
        }
    });

    event.from = "DB layer";
    callback(null, event)
};