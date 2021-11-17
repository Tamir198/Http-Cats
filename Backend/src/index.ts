import express from 'express'
const app = express()
const port = 5000

let test:string = "Hey from server using ts";

app.get('/', (_, res) => {
  res.status(200).send(test)
})  

app.listen(port, () => console.log(`Running on port ${port}`))