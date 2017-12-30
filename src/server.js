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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(cors({origin: 'http://localhost:4200'}));

app.post('/questions/save', saveQuestion);
app.get('/getAllQuestions', getAllQuestions);
app.put('/updateQuestion/:id', updateQuestion);
app.delete('/removeQuestion/:id', removeQuestion);

function saveQuestion(req, res) {

  let sql = "insert into questions(question,optionOne,optionTwo,optionThree,optionFour,rightAnswer,category,remark)" +
    " values(" + connection.escape(req.body.examQuestion) + "," + connection.escape(req.body.optionOne) + "," +
    connection.escape(req.body.optionTwo) + "," + connection.escape(req.body.optionThree) + "," + connection.escape(req.body.optionFour) + "," +
    connection.escape(req.body.rightAnswer) + ",'bcs'," + connection.escape(req.body.remark) + ")";
  // connection.escape(req.body.rightAnswer) + "," + connection.escape(req.body.category) + "," + connection.escape(req.body.remark) + ")";
  connection.query(sql, function (err, row, fields) {

    if (err) {
      console.log(err);
      res.status(500).send(JSON.stringify(err));
      throw err;
    }else{
      res.status(200).send(JSON.stringify('success'));
    }
  });
}

function getAllQuestions(req, res) {

  let sql = 'select * from questions order by id desc';
  connection.query(sql, function (err, row, fields) {
    if (err) {
      next(err);
    }
    res.send(row);
  });

}

function updateQuestion(req, res) {

  let sql = "update questions SET question=" + connection.escape(req.body.examQuestion) +
    ",optionOne=" + connection.escape(req.body.optionOne) +
    ",optionTwo=" + connection.escape(req.body.optionTwo) +
    ",optionThree=" + connection.escape(req.body.optionThree) +
    ",optionFour=" + connection.escape(req.body.optionFour) +
    ",rightAnswer=" + connection.escape(req.body.rightAnswer) +
    ",remark=" + connection.escape(req.body.remark) +
    " where id = " + connection.escape(req.params.id);
  connection.query(sql, function (err, row) {
    if (err) throw err;
    res.send(row);
  });
}

function removeQuestion(req, res) {

  let sql = 'delete from questions where id=' + connection.escape(req.params.id);
  connection.query(sql, function (err, row) {
    if (err) {
      console.error(err)
    }
    else {
      res.status(200)
    }
  });
}

app.listen(port);
console.log('Server started! At http://localhost:' + port);
