import express from 'express'
const cors = require('cors')

const { port } = require('./config.json');
var data = require('./DB/mockData');

const app = express()
app.use(cors());


app.get('/allData', (_, res) => {
  res.status(200).send(data);
})

app.get('/:statusCode', (req, res) => {
  res.status(200).send(data[req.params.statusCode]);
})  

app.listen(port, () => console.log(`Running on port ${port}`))