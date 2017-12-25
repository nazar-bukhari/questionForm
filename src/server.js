const cors = require('cors');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();
const port = process.env.PORT || 8888;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'bcs'
});

const queryString = 'insert into questions(question,optionOne,optionTwo,optionThree,optionFour,rightAnswer,remark)' +
  ' values ?';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(cors({origin: 'http://localhost:4200'}));

app.post('/questions/save',saveQuestion);
app.get('/getAllQuestions',getAllQuestions);

function saveQuestion(req,res){

  let sql = "insert into questions(question,optionOne,optionTwo,optionThree,optionFour,rightAnswer,remark)" +
    " values(" + connection.escape(req.body.question) + "," + connection.escape(req.body.optionOne) + "," +
    connection.escape(req.body.optionTwo) + "," + connection.escape(req.body.optionThree) + "," + connection.escape(req.body.optionFour) + "," +
    connection.escape(req.body.rightAnswer) + "," + connection.escape(req.body.remark) + ")";

  console.log(sql);
  connection.query(sql, function (err, row, fields) {

    if (err){
      console.log(err);
      throw err;
    }
  });
  res.send(req.body);
}

function getAllQuestions(req,res){

  let sql = 'select * from questions';
  connection.query(sql,function (err, row, fields) {
    if(err) throw err;
    res.send(row);
  });

}

app.listen(port);
console.log('Server started! At http://localhost:' + port);
