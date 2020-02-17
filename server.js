const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
let port = process.env.PORT || 2000;
app.use(express.static(path.join(__dirname)));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(port, function(err){
  console.log("App started")
})