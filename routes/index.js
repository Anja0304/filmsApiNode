var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bordeaux' });
});
/* GET home page. */
router.get('/film', function(req, res, next) {
  res.render('film', { title: 'Film' });
});
/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

module.exports = router;
