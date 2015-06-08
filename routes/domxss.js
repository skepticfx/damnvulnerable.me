var express = require('express');
var router = express.Router();



// Location.hash to window.eval
router.get('/:id', function(req, res) {
  res.setHeader('X-XSS-Protection', '0');
  res.render('domxss/'+req.params.id, {scriptSrc: req.params.id});
});









module.exports = router;
