var express = require('express');
var app     = express();
var PORT    = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));

app.get('/', function(_req,res) {
  res.render('public/index.html');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`))