var controller = require('../controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/movies', controller.messages.get);

router.add('/movies', controller.messages.add);

router.update('/movies', controller.messages.update);

module.exports = router;