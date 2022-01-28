const express = require('express');
const router = express.Router();


// Renders the HTML index page.
router.get('/', (req, res) => res.send('Navigate to /send or /routes'));

module.exports=router