const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({message: "Python Project Running"});
})

app.listen(4000, () => console.log("Server is running"));