var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});


/* Simple XHR Response */
router.get('/xhr/simple', function(req, res) {
  var obj = {};
  obj.type = 'DamnGoodType';
  obj.name = 'AmazingName';
  obj.description = req.query.description ||  'This is a damn good description of a damn good Name.';
  res.json(200, obj);
});




module.exports = router;
