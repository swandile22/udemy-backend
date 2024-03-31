import express from 'express';

const app = express();
const port = 5503;

app.get("/", (req, res) => {
    const today = new Date('March 29, 2024 23:15:30');
    const specDay = today.getDay();

    let type = "It's a weekday";
    let adv = "It's time to get these crumbs";

    if (specDay === 0 || specDay === 6) {
        type = "It's a weekend";
        adv = "It's time to kick back and relax";
        res.render("index.ejs", {dayType: type, advice: adv});
    } else {
        res.render("index.ejs", {dayType: type, advice: adv});
    }


});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});