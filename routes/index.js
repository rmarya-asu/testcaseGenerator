var express = require('express');
var router = express.Router();
var {generateTestCase,generateFailCase} = require('../middleware/generateTestCase');
/* GET home page. */
router.get('/golf/random',generateTestCase,function(tournament,req,res,next) {
  res.json(tournament);
});

router.get('/golf/error', generateFailCase,function(tournament,req,res,next) {
  res.json(tournament);
});

module.exports = router;
