var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/fff', function(req, res, next) {
  res.send('respond with a resource in fff');
});
module.exports = router;
