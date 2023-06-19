const express = require('express')
const app = express()
const port = 4300
const Rout = require("./src/routes/index.js");

const errorHandler = require("./src/middleware/error-Handler");
const error404 = require("./src/middleware/404");

// format
app.use(
    express.json({
        limit: '50mb',
    })
);

app.use(express.urlencoded({extended: true}))


app.use('/', Rout);
app.use(express.static('public'))



app.use(error404);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port 4300`)
})

module.exports = app;

