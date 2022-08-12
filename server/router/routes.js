var controller = require('../controllers/movies.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/movies', controller.get);

router.post('/movies', controller.add);

router.post('/movies/update_status', controller.update);

router.delete('/movies/delete_movie', controller.remove);

module.exports = router;