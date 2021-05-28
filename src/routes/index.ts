var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req:typeof express.Request, res:typeof express.Response, next:any) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
