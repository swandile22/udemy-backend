import express from 'express';
import bodyParser from "body-parser";

const app = express();
const port = 5400;
let bandName = "";
app.use(bodyParser.urlencoded({ extended: true }));


// function logger(req, res, next) {
//   const receivedData = req.body;
//   bandName = receivedData["street"] + receivedData["pet"];
//   next();
// }

app.get("/", (req, res)=> {
    res.render("index.ejs");
});

app.post("/submit", (req, res)=>{
   const formHeader = req.body["blogHeader"];
   const formSubheader = req.body["blogSubHeader"];
   const formFile = req.body["fileUpload"];
   const formUrl = req.body["blogUrl"];
    console.log(formHeader);
    console.log(formSubheader);
    console.log(formFile);
    console.log(formUrl);
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
