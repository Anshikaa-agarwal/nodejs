//this module is exported
const name1 = 'Anshika';
const name2 = 'abc';

const greetName = (name) => {
    console.log(`Namaste ${name}`);
} 

// console.log(greetName);
module.exports = {name1, name2, greetName};
// module.exports = {greetName};

//exporting objects
const human = {
    name: 'peter'
}

module.exports.humanoid = human;
