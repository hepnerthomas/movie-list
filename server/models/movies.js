var db = require('../database');

module.exports = {

  // get all movies
  get: function(callback) {
    var queryString = 'SELECT * FROM movies';
    db.connection.query(queryString, (err, results) => {
      callback(err, results);
    });
  },

  // add a movie to the list
  add: function(params, callback) {
    var queryString = 'INSERT INTO movies VALUES(NULL, ?, "To Watch")';
    db.connection.query(queryString, params, (err, results) => {
      callback(err, results);
    });
  },

  // remove a movie from the list
  remove: function(params, callback) {
    var queryString = 'DELETE FROM movies WHERE id = ?';
    db.connection.query(queryString, params, (err, results) => {
      callback(err, results);
    });
  },

  // change a movie's status
  update: function(params, callback) {
    var queryString = 'UPDATE movies \
                      SET status = IF(status = "Watched", "To Watch", "Watched") \
                      WHERE id = ?';
    db.connection.query(queryString, params, (err, results) => {
      callback(err, results);
    });
  }


};