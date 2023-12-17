//modules in js
//we'll import exportFunc.js here.
// const impFunc = require('./exportFunc.js');
// console.log(impFunc);
// console.log(impFunc.greetName);
// console.log(impFunc.name1);
// console.log(impFunc.name2);


//another way to import
const {name2, name1, greetName} = require('./exportFunc.js');
console.log(greetName);
console.log(name2);
console.log(name1);