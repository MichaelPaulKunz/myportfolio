const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
app.use(express.static(CLIENT_PATH));

app.get('/pop', function(req, res){
  res.redirect('http://ec2-3-143-216-15.us-east-2.compute.amazonaws.com:8080');
});


app.listen(PORT, (() => {
  console.log(`Server listening at http://127.0.0.1:${PORT}`);
}));
