
import express from 'express'
const router = express.Router();

var data = require('../DB/mockData');

router.get('/allData', (_, res) => {
    res.status(200).send(data);
  })

module.exports = router;
