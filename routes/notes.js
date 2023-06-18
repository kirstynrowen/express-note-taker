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
router.get('/notes', (req, res) => {
    const allNotes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/db.json')));
    res.json(allNotes);
});

//post route
router.post('/notes', (req, res) => {
    console.log(req.body)
    const { title, text } = req.body;
    const newNote = {
        id: uuidv4(),
        title,
        text,
      };
    fs.readFile(path.resolve(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Could not read database file'});
        }
        const allNotes = JSON.parse(data);
        //add new note to end of all notes file
        allNotes.push(newNote);

        fs.writeFile(path.resolve(__dirname, '../db/db.json'), JSON.stringify(allNotes), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Could not write to database file'});
            }

            res.json(newNote);
        });
    });
});

//delete route
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;

    fs.readFile(path.resolve(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Could not read database file'});
        }
       let allNotes = JSON.parse(data);
       //need to find note index by id
       //handle error if note not found
       //splice selected note?
       //writeFile to delete note
    })
})

module.exports = router;