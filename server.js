//import dependencies
const express = require('express');

const apiRoutes = require('./routes/notes');
const htmlRoutes = require ('./routes/htmlRoutes')

//create a port, initialize app
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)

//start server on port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);