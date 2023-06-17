//import dependencies
const express = require('express');
const path = require('path');

const apiRoutes = require('.routes/index');

//create a port, initialize app
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);

//html routes
//GET route for home page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

//GET route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
  });

//start server on port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);