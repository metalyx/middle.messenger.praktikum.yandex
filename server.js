const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/dist'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

// app.get('/src/index.js', function(req, res) {
//   res.sendFile(path.resolve(__dirname, './src/index.js'));
// });

// app.get('/src/utils/check-user-authorised/CheckUserAuthorised.js', function(req, res) {
//   res.sendFile(path.resolve(__dirname, './src/utils/check-user-authorised/CheckUserAuthorised.js'));
// });

// app.get('/src/modules/login/Login.js', function(req, res) {
//   res.sendFile(path.resolve(__dirname, './src/modules/login/Login.js'));
// });

// app.get(pat, function(req, res) {
//   res.sendFile(path.resolve(__dirname, pat));
// });

app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}!`);
});