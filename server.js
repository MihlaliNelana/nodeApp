const express = require("express");
const app = express();

app.use(express.static('./CardGame'));
const port = app.listen(8080);