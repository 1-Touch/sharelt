const router = require('express').Router();

// Controllers
const { pageList } = require('../../controllers/facebook/pages');

// Get a list of pages created by the user
router.get('/pageList', pageList);

module.exports = router;
