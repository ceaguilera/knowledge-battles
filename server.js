var express = require('express');
var path    = require("path");

var app = express();

/* Asing port 8080 */
app.set('port', (process.env.PORT || 8080))
app.listen(app.get('port'));

/* File static */
app.use(express.static(path.join(__dirname, 'public/')));

/* All petition send index */
app.get('*', (req, res) => {
  res.type('html');
  res.sendFile(path.join(__dirname+'/public/index.html'));
});
