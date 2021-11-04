//require express router
const router = require('express').Router();

//require needed controllers
const rootController = require('../controllers/root.controller');

//create routes
router.get('/', rootController.root);

//export router
module.exports = router;

