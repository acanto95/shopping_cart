var express = require('express');
var path =  require('path');

var PORT = 8080;

var app=express()

app.use('/nodemodules', express.static(path.join(__dirname, './nodemodules')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/shopcardemo.html'));
});

app.get('/shoppingcar', function (req, res) {
    res.sendFile(path.join(__dirname + '/shoppingcar.html'));
});

app.listen(PORT);

console.log('Running on port ' + PORT);
