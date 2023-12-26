const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource, hello world');
  console.log('listened...');
});

router.get

module.exports = router;
