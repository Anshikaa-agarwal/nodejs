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