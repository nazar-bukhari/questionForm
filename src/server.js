// grab the packages we need
var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 8888;

// routes will go here

app.post('/questions/save', function(req, res) {

  console.log("hello");
  res.status(200).send(req.params.id);
});

app.use(cors());

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
