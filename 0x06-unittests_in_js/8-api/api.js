const express = require('express');

const app = express();  // Correction de l'erreur
const port = 7865;  // Correction du port

app.get('/', (req, res) => {  // Correction de "rep" en "res" et "sed" en "send"
  res.send('Welcome to the payment system');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;

