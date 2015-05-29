var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  var val = req.session.val;
  if (!val)
  {
    val = val + 1;
  }
  res.send('Hello World! ' + val );
});

module.exports = router;
