exports.handler = (event, context, callback) => {
    console.log("Step 1");
    console.log(event);
    event.from="Step 1";
    callback(null, event);
};