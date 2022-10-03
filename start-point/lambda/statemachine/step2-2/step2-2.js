exports.handler = (event, context, callback) => {
    console.log("Step 2-2");
    console.log(event);
    event.from="Step 2-2";
    callback(null, event);
};