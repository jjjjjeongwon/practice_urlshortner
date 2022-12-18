const express = require('express');
const app = express();
const path = require('path');

app.listen(8080, function(){
    console.log('Listening on port 8080')
});

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'sgdevcamp_urlshortner/build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'sgdevcamp_urlshortner/build/index.html'))
})


app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'sgdevcamp_urlshortner/build/index.html'))
})