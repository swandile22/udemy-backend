import express from 'express';
import bodyParser from "body-parser";

const app = express();
const port = 5400;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=> {
    res.render("index.ejs");
});

app.post("/submit", (req, res)=>{
    const blogThumbnail = req.body["fileUpload"];
    const blogHeader = req.body["blogHeader"];
    const blogSubheader = req.body["blogSubHeader"];
    const blogURL = req.body["blogUrl"];
   res.render("index.ejs", {thumbnail:blogThumbnail,
       headerText:blogHeader, subHeader: blogSubheader, URL:blogURL})
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
