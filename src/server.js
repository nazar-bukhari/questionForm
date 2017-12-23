/**
 * Created by ratul on 12/23/17.
 */

var restify = require('restify');

function saveQuestion(request, response) {

  console.log('Request Received: ',request);
}

const server = restify.createServer({

  name: 'bcsServer',
  version: '1.0.0'
});

server.get('/questions/save',saveQuestion);

server.listen(8888);
