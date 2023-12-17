const os = require('os');
console.log(os.arch())
// console.log(os.cpus())
console.log(os.devNull)
console.log(os.availableParallelism());
console.log(os.freemem());
console.log("System uptime: " + os.uptime + " seconds.");
console.log("Total memory: " + os.totalmem() + " bytes.");
console.log("type of operationg system i'm using: " + os.type);
console.log("Kernel version: " + os.version)