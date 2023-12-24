const fs = require("fs");
const biodata = {
    name: "abc",
    age: 19
}

// to convert above abject into json:
const jsonData = JSON.stringify(biodata);
console.log(jsonData);

// to convert json back to object, we use parse:
const objData = JSON.parse(jsonData);
console.log(objData);

// Tasks to do:
// 1. covert object to JSON
// 2. add it to another file
// 3. read file
// 4. convert back to original js object
// 5. console.log()

const obj = {
    name: "Anshika",
    age: 19,
    college: "jiit"
};

const jsonD = JSON.stringify(obj);

fs.writeFile('jsonFile.json', jsonD, (err) => {
    console.log('action completed');
})

const original = JSON.parse(jsonD);

console.log(original);

fs.readFile("jsonFile.json", 'utf-8', (err, data) => {
    console.log(data);
})