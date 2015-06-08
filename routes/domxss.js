var express = require('express');
var router = express.Router();



// Location.hash to window.eval
router.get('/location_hash_to_window_eval', function(req, res) {
  res.setHeader('X-XSS-Protection', '0');
  res.render('domxss/location_hash_to_window_eval', {title: 'location.hash flows to window.eval method', scriptSrc:'location_hash_to_window_eval'});
});




// XHR response to div.innerHTML
router.get('/location_hash_to_document_write', function(req, res) {
  res.setHeader('X-XSS-Protection', '0');
  res.render('domxss/location_hash_to_document_write', {title: 'location.hash flows to document.write method', scriptSrc:'location_hash_to_document_write'});
});






module.exports = router;
