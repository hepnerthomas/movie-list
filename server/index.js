const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

// Middleware
var morgan = require('morgan');
var cors = require('cors');

// Database
const db = require('./database');

// Router
var router = require('./router/routes.js');

// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Serve the client files
app.use(express.static('client/dist'));

// Set up routes
app.use('', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


// app.get('/movies', (req, res) => {
//   // Model
//   var queryString = 'SELECT * FROM movies';
//   db.connection.query(queryString, (err, results) => {
//     if (err) {
//       console.error('Unable to retrieve list of movies from the database.');
//       res.sendStatus(500);
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.delete('/movies/delete_movie', (req, res) => {
//   var params = [req.body.id];
//   // console.log("req.body: ", req.body);
//   // res.send(req.body.title);
//   var queryString = 'DELETE FROM movies WHERE id = ?';
//   db.connection.query(queryString, params, (err, results) => {
//     if (err) {
//       console.error('Unable to add movie to the database.');
//       res.sendStatus(500);
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// app.post('/movies', (req, res) => {
//   var params = [req.body.title];
//   // console.log("req.body: ", req.body);
//   // res.send(req.body.title);
//   var queryString = 'INSERT INTO movies VALUES(NULL, ?, "To Watch")';
//   db.connection.query(queryString, params, (err, results) => {
//     if (err) {
//       console.error('Unable to add movie to the database.');
//       res.sendStatus(500);
//     } else {
//       res.sendStatus(201);
//     }
//   });
// });

// app.post('/movies/update_status', (req, res) => {
//   var params = [req.body.id];
//   // console.log("req.body: ", req.body);
//   // res.send(req.body.title);
//     var queryString = 'UPDATE movies \
//                       SET status = IF(status = "Watched", "To Watch", "Watched") \
//                       WHERE id = ?';
//     db.connection.query(queryString, params, (err, results) => {
//       if (err) {
//         console.error('Unable to add movie to the database.');
//         res.sendStatus(500);
//       } else {
//         res.sendStatus(201);
//       }
//     });
// });
