var express = require('express');
var app = express();

app.get('/dispo', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({code:1 , name: "in_stock"})
});

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});

