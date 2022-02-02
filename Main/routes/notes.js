const express = require('express');
const router = express.Router();
const fs = require("fs");
const _ = require("lodash");
const {v4:uuidv4} = require("uuid");

const {
    readFromFile, readAndAppend, writeToFile
} = require("../helpers/fsUtils")


// Renders the HTML index page.
router.get('/', (req, res) => {
    let data = fs.readFileSync("./db/notes.json");
    let notes = JSON.parse(data);
    console.log(notes);

    res.render('notes', {notes})
})

module.exports=router

