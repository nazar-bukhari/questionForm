// grab the packages we need
let express = require('express');
let app = express();
let cors = require('cors');
const port = process.env.PORT || 8888;
// let router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(cors({origin: 'http://localhost:4200'}));

// router.post('/questions/save',saveQuestion);
//
// function saveQuestion(request,response){
//
//   console.log("hello",request.body);
//   response.end();
// }

app.post('/questions/save', function(req, res) {

  console.log("hello",req.body);
  res.send('End');
  // res.status(200).send(req.params.id);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
