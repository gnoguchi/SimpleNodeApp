const express = require('express')
const app = express()
const port = process.env.PORT || '3000'
const http = require('http');
const server   = http.createServer(app);
const routes = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

server.listen(port, function () {
    console.log(`app listening on port ${port}`)
})

module.exports = app