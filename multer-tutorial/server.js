import express from 'express';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

import {upload} from "./upload.js";

app.use(express.static('public'));


app.set("view engine", "html");
// Setup routes for file uploads

 app.get('/upload', (req, res) => {
         res.sendFile(join(__dirname, 'public', 'upload.html'));
 });

    app.post('/upload', upload.single('fName', (req, res) => {
        res.json({message: 'file uploaded successfully'});
    }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})