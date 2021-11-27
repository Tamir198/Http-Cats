import express from 'express'

var cors = require('cors')
const app = express()
app.use(cors());

const port = 8888

var Data = require('./DB/mockData');
let test:string = "Hey from server using ts";

app.get('/allData', (_, res) => {
  res.status(200).send(Data)
})

app.get('/:statusCode', (req, res) => {
  res.status(200).send(Data[req.params.statusCode])
})  

app.listen(port, () => console.log(`Running on port ${port}`))