const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;
console.log("servert  is working  ");
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});const x ="45454545";
