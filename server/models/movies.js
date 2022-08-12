var db = require('./database');

module.exports = {

  // get all movies
  get: function(callback) {
    var queryString = 'SELECT * FROM movies';
    db.query(queryString, (err, results) => {
      callback(err, results);
    });
  },

  // add a movie to the list
  add: function(params, callback) {
    var queryString = 'INSERT INTO movies VALUES(NULL, ?, "To Watch")';
    db.query(queryString, params, function(err, results) => {
      callback(err, results);
    });
  },

  // change a movie's status
  update: function(params, callback) {
    var queryString = 'UPDATE movies \
                      SET status = IF(status = "Watched", "To Watch", "Watched") \
                      WHERE id = ?';
    db.query(queryString, params, function(err, results) => {
      callback(err, results);
    });
  }


};