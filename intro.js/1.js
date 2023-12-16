const i = 10;
if (i<5) {
    console.log("small number");
}
else {
    console.log("large number");
}

console.log("let's try to run this basic node js app.");


//global variables
console.log("directory name: " + __dirname);
console.log("file name: " + __filename);
console.log("environment: " + process);
console.log("module: " + module);


//js functions are also available here
setInterval(() => {
    console.log("namaste");
}, 1000);