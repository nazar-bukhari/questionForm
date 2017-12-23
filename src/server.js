var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 8888;
var bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/questions/save', function(req, res) {
  console.log("request received: ",req.body);
  res.status(200).send('ok');
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
