const express = require('express');
const router = express.Router();

// @route   GET  api/workouts
// @desc    Get all of user's workouts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all of user workouts');
});

// @route   POST  api/workouts
// @desc    Add workout
// @access  Private
router.post('/', (req, res) => {
  res.send('Add workout');
});

// @route   PUT  api/workouts/:id
// @desc    Update workout
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update workout');
});

// @route   DELETE  api/workouts/:id
// @desc    Delete workout
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Delete workout');
});

module.exports = router;
