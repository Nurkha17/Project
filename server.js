const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/', require("mainpage"))
app.use('/clothes', require("clothes"))
app.use('/shoes', require("shoes"))
app.use('/accessories', require("accessories"))



app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

