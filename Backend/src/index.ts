import express from 'express'
const app = express()
const port = 5000

var Data = require('./DB/mockData');

let test:string = "Hey from server using ts";

app.get('/', (_, res) => {
  res.status(200).send(Data)
})

app.get('/:statusCode', (req, res) => {
  res.status(200).send(Data[req.params.statusCode])
})  

app.listen(port, () => console.log(`Running on port ${port}`))