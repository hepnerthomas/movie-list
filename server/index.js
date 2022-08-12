const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./database/index.js');

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

// Connect to mysql database
db.connection.connect();


