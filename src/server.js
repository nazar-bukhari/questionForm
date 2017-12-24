let express = require('express');
let app = express();
let cors = require('cors');
const port = process.env.PORT || 8888;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(cors({origin: 'http://localhost:4200'}));

app.post('/questions/save',function(req,res){
  console.log("hello", req.body);
  res.send('End');
});
// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
