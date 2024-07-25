let events = require('events');
let eventEmitter = new events.EventEmitter();

// Create an event handler:
let myEventHandler = function () {
    console.log('I hear a scream!');
};

// Assign the Event handler to an event:
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');