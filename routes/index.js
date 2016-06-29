var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
   res.sendFile(path.join(__dirname + '/public/index.html'));
});

router.get('/home', function(req, res, next) {
	res.render('index', {title: 'hello world'});
})
module.exports = router;
