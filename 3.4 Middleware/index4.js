import express from "express";
import { dirname } from "path"
import { fileURLToPath} from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let bandName = "";

app.use(bodyParser.urlencoded({extended: true}));

function logger(req, res, next) {
  const receivedData = req.body;
  bandName = receivedData["street"] + receivedData["pet"];
  next();
}


app.use(logger);


app.get("/submit", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Here's your generated band name:</h1><em><h2>${bandName}🤘</h2></em>`)

});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
