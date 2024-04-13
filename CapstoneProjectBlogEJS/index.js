import express from 'express';
import bodyParser from "body-parser";
import path from 'path';
import multer from 'multer';

const app = express();
const port = 5400;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: (res, file, cb) => {
        cb(null, "public/images");
    }, filename: (res, file, cb) => {
        console.log(file);
         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }});

const upload = multer({storage:storage});

app.get("/", (req, res)=> {
    res.render("home.ejs");
});
app.get("/blog", (req, res)=> {
    res.render("index.ejs");
});

app.post("/blog", upload.single("fileUpload"), (req, res)=>{
    const blogHeader = req.body["blogHeader"];
    const blogSubheader = req.body["blogSubHeader"];
    const blogURL = req.body["blogUrl"];
    const blogThumbnail = req.file.filename;
   res.render("index.ejs", {thumbnail:blogThumbnail,
       headerText:blogHeader, subHeader: blogSubheader, URL:blogURL})
});

app.post("/blog/:my__blog__list__post__delete/delete", (req, res)=>{
    const postId = req.params.my__blog__list__post__delete;
    res.render("index.ejs", {postId:postId})
})
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
