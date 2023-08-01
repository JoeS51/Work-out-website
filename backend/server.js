require('dotenv').config()

const express = require('express');


const app = express();

app.get('/welcome', (req, res) => {
    res.json({message: 'Welcome shlammies'})
})


// can change this to env var
const port = 5000;
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
});
