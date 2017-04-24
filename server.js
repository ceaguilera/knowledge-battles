var express = require('express');
var path    = require("path");

var app = express();


app.set('port', (process.env.PORT || 8080))
app.listen(app.get('port'));

app.use(express.static(path.join(__dirname, 'public/')));

app.get('*', (req, res) => {
  res.type('html');
  res.sendFile(path.join(__dirname+'/public/index.html'));
});


//app.use(express.static('public'));
//assuming app is express Object.
//app.get('/',function(req,res){    
//     res.sendFile(path.join(__dirname+'/public/app/index.html'));
//});