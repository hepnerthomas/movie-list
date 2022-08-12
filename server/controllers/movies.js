var models = require('../models');

module.exports = {

  get: function(req, res) {
    models.movies.get((err, results) => {
      if (err) {
        console.error('Unable to retrieve list of movies from the database.');
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });

  },

  add: function(req, res) {
    var params = [req.body.title];
    models.movies.add(params, (err, results) => {
      if (err) {
        console.error('Unable to add movie to the database.');
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });

  },

  update: function(req, res) {
    var params = [req.body.id];
    models.movies.update(params, (err, results) => {
      if (err) {
        console.error('Unable to change movie status in the database.');
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }


}