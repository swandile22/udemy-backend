import express, {request} from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Request method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
