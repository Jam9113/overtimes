const express = require('express');
const router = express.Router();
const Overtime = require('../models/Overtime');


router.post('/', async (req, res) => {
  try {
    const overtime = new Overtime(req.body);
    await overtime.save();
    res.status(201).json({ message: 'Overtime submitted.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const data = await Overtime.find().sort({ date: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
