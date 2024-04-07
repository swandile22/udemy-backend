import express from 'express';
import bodyParser from "body-parser";
import path from 'path';
import multer from 'multer';

const app = express();
const port = 5400;
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: (res, file, cb) => {
        cb(null, "public/images");
    }, filename: (res, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    }});

const upload = multer({storage:storage});

app.get("/", (req, res)=> {
    res.render("index.ejs");
});

app.post("/submit", upload.single("fileUpload"), (req, res)=>{
    const blogHeader = req.body["blogHeader"];
    const blogSubheader = req.body["blogSubHeader"];
    const blogURL = req.body["blogUrl"];
   res.render("index.ejs", {thumbnail:blogThumbnail,
       headerText:blogHeader, subHeader: blogSubheader, URL:blogURL})
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
