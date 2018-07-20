var express = require('express');
var app = express();
 
app.use(express.static(__dirname + '/../client'))

app.get('/', function (req, res) {
  res.end();
})
 
app.listen(3001, function() {
	console.log("Listening on port 3001..."); 
});