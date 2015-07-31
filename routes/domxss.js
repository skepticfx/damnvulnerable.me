var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
  res.setHeader('X-XSS-Protection', '0');
  res.render('domxss/'+req.params.id, {scriptSrc: req.params.id, params: req.query});
});









module.exports = router;
