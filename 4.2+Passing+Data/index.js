import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const fullName = req.body["fName"] + " " +  req.body["lName"]
    let nameCount = req.body["fName"].trim().length + req.body["lName"].trim().length;
    res.render("index.ejs", {nameCount: nameCount, fullName: fullName});
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
