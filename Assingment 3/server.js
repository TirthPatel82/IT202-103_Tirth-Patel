const express = require("express");
const cors = require("cors");

const app = express();

// JSON requests
app.use(express.json());
app.use(cors());

// function: counting vowels and consonants
function checkText(str) 
{
    let v = str.match(/[aeiou]/gi);
    let c = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);

    return {
        vowels: v ? v.length : 0,
        consonants: c ? c.length : 0
    };
}

// POST
app.post("/count", (req, res) => {
    const body = req.body;
    const textStats = checkText(body.text);

    res.json(textStats);
});

// start server
app.listen(3000, () => {
    console.log("Server is up at http://localhost:3000");
});
