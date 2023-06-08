//api routes?
//import dependencies
const express = require('express');
const router = require('express').Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

//middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//get route?
//all notes
router.get('/notes', (req, res) => {
    const allNotes = JSON.parse(fs.readFile(path.resolve(__dirname, '..', 'db/db.json')));
    res.json(allNotes);
})

//post route?
router.post('/notes', (req, res) => {
    
})

