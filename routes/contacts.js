const express = require('express');
const Contact = require('../models/contact');

const router = express.Router();

// GET all contacts
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// GET single contact by ID
router.get('/:id', async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
});

module.exports = router; // Export router
