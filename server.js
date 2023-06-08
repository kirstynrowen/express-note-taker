//import dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/notes');

//create a port, initialize app
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

//routes


//start server on port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);