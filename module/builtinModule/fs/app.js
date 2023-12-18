const fs = require('fs');

//read data from file
console.log(fs.readFileSync('./text1.txt', 'utf8'))

//overwrites the data if file exists, or creates a new file if it does not exist.
fs.writeFileSync('./text1.txt', 'New data overwritten in text1 file');    //overwrites data
fs.writeFileSync('./text3.txt', 'A new file, text3 is created and data is added.');  //creates new file
fs.writeFileSync('./text4.txt', 'A new file, text4 is created and data is added.');  //creates new file


//appends file
fs.appendFileSync('./text1.txt', ' appended data');

//create a new file async.js
fs.writeFileSync('./async.js', '');