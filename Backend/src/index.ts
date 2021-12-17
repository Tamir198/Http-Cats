import express from 'express'
const cors = require('cors')

const app = express()
app.use(cors());

const allDataRout = require('./routs/allData');
const statusCodeRouter = require('./routs/statusCodes');

app.use(allDataRout);
app.use(statusCodeRouter);

app.listen(8888, () => console.log(`Running on port 8888`))