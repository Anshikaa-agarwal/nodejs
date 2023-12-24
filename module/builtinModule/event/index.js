const EventEmitter = require("events");
const event = new EventEmitter();
// console.log(event);

event.on("sayMyName", () => {
    console.log("Your name is abc.");
})
event.on("sayMyName", () => {
    console.log("Your name is def.");
})
event.on("sayMyName", () => {
    console.log("Your name is ghi.");
})
event.emit("sayMyName");