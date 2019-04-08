var cors = require('cors');
var express = require('express');

var app = express();

app.options('*', cors());
app.use(cors());

var names = ['World', 'Ford', 'Arthur', 'Trillian', 'Zaphod', 'Marvin'];

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080');
});

app.get('/getName', function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  var idx = Math.floor(Math.random() * names.length);
  response.end(names[idx]);
});
