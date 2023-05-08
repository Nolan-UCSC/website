// server-express.js
const express = require('express');
const app = express(); // initialize app
const port = 3000;
let counter = 0;

// GET callback function returns a response message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js');
})




app.get('/visits', (req, res) => {
	counter += 1
      // Text formatting from ‘text formatting’ JavaScript prelab section
	res.send(`There have been ${counter} visits to this session`);
    
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})

app.get('/rock', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
});
app.get('/paper', (req, res) => {
});
app.get('/scissors', (req, res) => {
});

