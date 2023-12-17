//this module is exported
const name1 = 'Anshika';
const name2 = 'abc';

const greetName = (name) => {
    consolelog(`Namaste ${name}`);
} 

// console.log(greetName);
module.exports = {name1, name2, greetName};
// module.exports = {greetName};