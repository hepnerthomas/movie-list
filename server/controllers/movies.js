var models = require('../models/movies.js');

module.exports = {

  get: function(req, res) {
    models.get((err, results) => {
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
    models.add(params, (err, results) => {
      if (err) {
        console.error('Unable to add movie to the database.');
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });

  },

  remove: function(req, res) {
    var params = [req.body.id];
    models.remove(params, (err, results) => {
      if (err) {
        console.error('Unable to remove movie from the database.');
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });

  },


  update: function(req, res) {
    var params = [req.body.id];
    models.update(params, (err, results) => {
      if (err) {
        console.error('Unable to change movie status in the database.');
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }


}