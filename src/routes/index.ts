import express from 'express'
var router = express.Router();

/* GET home page. */
router.get('/', (req:express.Request, res:express.Response, next:any) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
