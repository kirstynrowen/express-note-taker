//api routes
//import dependencies
// const express = require('express');
const router = require('express').Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

//get route
//all notes
// /api/notes
router.get('/', (req, res) => {
    const allNotes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/db.json')));
    res.json(allNotes);
});

//post route
router.post('/', (req, res) => {
    console.log(req.body)
    const { title, text } = req.body;
    const newNote = {
        id: uuidv4(),
        title,
        text,
      };
})

module.exports = router;