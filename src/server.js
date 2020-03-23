//install express server
const express = require('express');
const path = require('path');

const app = express();

//serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/positive-dev-solutions'));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/positive-dev-solutions/index.html'));
});

app.listen(process.env.PORT || 8080);