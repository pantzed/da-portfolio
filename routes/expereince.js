const express = require('express');
const router = express.Router();

/* GET exp page. */
router.get('/', function(req, res, next) {
  res.render('experience', { title: 'Experience' });
});

module.exports = router;