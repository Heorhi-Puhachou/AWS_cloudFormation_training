exports.handler = (event, context, callback) => {
    console.log("Step 2-1");
    console.log(event);
    event.from="Step 2-1";
    callback(null, event);
};
