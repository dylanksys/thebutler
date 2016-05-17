var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/api/users', function(req, res) {
	res.send('Path: /api/users');
};

router.get('/api/butlers', function(req, res) {
	res.send('Path: /api/butlers');
};

router.get('/api/items', function(req, res) {
	res.send('Path: /api/items');
};

module.exports = router;
