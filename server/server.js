const express = require('express');
const path = require('path')
let app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl)
    next();
})

app.get('/',(req, res) => {
    res.send('hello from the web server side...')
});

app.listen(3000);