var express = require('express');
var router = express.Router();

//sets defualt to skill page
router.get('/', function(req, res, next) {
  res.redirect('/skills');
});

module.exports = router;
