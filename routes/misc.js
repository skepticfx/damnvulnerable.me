var express = require('express');
var router = express.Router();

router.get('/1', function(req, res) {

  res.render('misc/1', {title: 'Misc Bug 1'});
});




module.exports = router;
