const fs = require('fs');

fs.rename('./asuncText.txt', './asyncText.txt', (err) => {
    console.log("completed");
});