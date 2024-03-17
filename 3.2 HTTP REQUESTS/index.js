import express from 'express';
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send("<h1>Home Page</h1>");
})

app.get('/about', (req, res) => {
  res.send("<h2>This page is about my website</h2>");
})

app.get('/contact', (req, res) => {
  res.send("<h3>My contact details: 011 855 7128</h3>");
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


