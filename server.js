const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    console.log('Got request on GET endpoint');
    res.send('REST API is working!');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));


