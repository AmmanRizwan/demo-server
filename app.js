import express from 'express';

const app = express();

app.use('/', (req, res) => {
  res.json({message: "Python Project Running"});
})

app.listen(4000, () => console.log("Server is running"));

export default app;