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

//if rock
app.get('/rock', (req, res) => {
    //generats rand numb from 0-1 then multiples by 3 + 1
    const rndInt = Math.floor(Math.random() * 3) + 1;
    //pritns out the choice of the bot
    console.log(rndInt);
    if (randInt === 3){
        res.send("Bot picked scissors you win!!");

    } else if (randInt === 1) {
        res.send("Bot picked rock. Tie! Try again");
    } else{
        res.send("Bot picked paper. game over! Try again");
    }
});

//if paper
app.get('/paper', (req, res) => {
    //generats rand numb from 0-1 then multiples by 3 + 1
    const rndInt = Math.floor(Math.random() * 3) + 1;
    //pritns out the choice of the bot
    console.log(rndInt);
    if (randInt === 3){
        res.send("Bot picked rock you win!!");

    } else if (randInt === 1) {
        res.send("Bot picked paper. Tie! Try again");
    } else{
        res.send("Bot picked scissors. game over! Try again");
    }
});

//if scissors
app.get('/scissors', (req, res) => {
    //generats rand numb from 0-1 then multiples by 3 + 1
    const rndInt = Math.floor(Math.random() * 3) + 1;
    //pritns out the choice of the bot
    console.log(rndInt);
    if (randInt === 3){
        res.send("Bot picked paper you win!!");

    } else if (randInt === 1) {
        res.send("Bot picked scissors. Tie! Try again");
    } else{
        res.send("Bot picked rock. game over! Try again");
    }
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})