const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Workout = require('../models/Workout');

// @route   GET  api/workouts
// @desc    Get all of user's workouts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(workouts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST  api/workouts
// @desc    Add workout
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('type', 'Workout type is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, type } = req.body;

    try {
      const newWorkout = new Workout({
        name,
        type,
        user: req.user.id,
      });

      const workout = await newWorkout.save();
      res.json(workout);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('server error');
    }
  }
);

// @route   PUT  api/workouts/:id
// @desc    Update workout
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { name, type } = req.body;
  //Build a workout object based on submitted fields
  const workoutFields = {};
  if (name) workoutFields.name = name;
  if (type) workoutFields.type = type;

  try {
    let workout = await Workout.findById(req.params.id);
    if (!workout) return res.status(404).json({ msg: 'Workout not found' });

    //Authenticate user
    if (workout.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: 'Not authorized to edit this workout' });
    }

    workout = await Workout.findByIdAndUpdate(
      req.params.id,
      { $set: workoutFields },
      { new: true }
    );
    res.json(workout);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

// @route   DELETE  api/workouts/:id
// @desc    Delete workout
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let workout = await Workout.findById(req.params.id);
    if (!workout) return res.status(404).json({ msg: 'Workout not found' });

    //Authenticate user
    if (workout.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: 'Not authorized to edit this workout' });
    }
    //findByIdAndDelete is deprecated
    await Workout.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Workout removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

module.exports = router;
