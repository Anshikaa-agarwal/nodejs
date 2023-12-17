const os = require('os');
console.log(os.arch())
// console.log(os.cpus())
console.log(os.devNull)
console.log(os.availableParallelism());
console.log(os.freemem()/1024/1024/1024);
console.log("System uptime: " + os.uptime + " seconds.");
console.log("Total memory: " + os.totalmem() + " bytes.")