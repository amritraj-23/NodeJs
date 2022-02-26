const fs = require("fs");

// for creating the new file using file system

fs.writeFileSync("new.txt","Hello From the World");

// for append in the current file

fs.appendFileSync('new.txt',"This is new Line");

// for read the data from the file it returns data in buffer format

const data = fs.readFileSync("new.txt");

console.log(data.toString());

// to rename the file using file system

fs.renameSync("new.txt","file.txt");

// this is synchronous file system it executes when one process terminates
// for async just remove the sync from the name


