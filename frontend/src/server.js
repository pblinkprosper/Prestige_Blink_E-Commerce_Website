const express = require('express');
const path = require('path');

const app = express();

app.listen(8080, () => {
    console.log('Server is listening on http://localhost:8080');
});

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
})

app.post('/contact', (req, res) => {
    console.log(req.body);
})