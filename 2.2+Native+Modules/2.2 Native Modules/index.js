/*
* require("fs") - is used to import the file node package
* fs.writeFile - creates a file and shoves the data into the file
* fs.readFile - pulls data from an existing file and displays it where you choose to display
* utf8 - is the preferred code standard used in emails and web pages
* */
const fs = require("fs");

fs.writeFile("message2.txt", "Hello, World!, from NODEJS, Swandile", (err) => {
    if (err) throw err;
    console.log("Your file has been saved Swandile!");
});

fs.readFile("./message2.txt", "utf8" , (err, data) => {
    if (err) throw err;
    console.log(data);
});

