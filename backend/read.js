var express = require('express');
var path = require('path');
var cors = require('cors')
var app = module.exports = express();
const port = 5001;
const read = __dirname + '/' + __filename.split('/')[__filename.split('/').length-1];

app.use(cors());
app.use(express.urlencoded({extended: true}));

app.post('/backend/read', function(req, res){
  console.log('req.body', req.body);
  var data = [1,2,3,4,5];
  console.log('dataAPI', data);

  res.send(data);
});

app.listen(port, () => {
  console.log(`listening for ${port}`);
})