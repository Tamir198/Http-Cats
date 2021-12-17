import express from 'express'
const router = express.Router();
var data = require('../DB/mockData');

router.get('/:statusCode', (req, res) => {
    res.status(200).send(data[req.params.statusCode]);
  })  

module.exports = router;