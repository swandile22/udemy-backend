import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let header = "Please enter your First name and Last name👇";
  res.render("index.ejs", {headerText: header});
});

app.post("/submit", (req, res) => {
  let firstName = req.body["fName"];
  let lastName = req.body["lName"];
  const fullName = firstName + lastName;
  const nameCount = fullName.trim().length;
  let header = "There are " + nameCount + " letters in your Name";
  res.render("index.ejs", {headerText: header});

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
