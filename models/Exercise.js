const mongoose = require('mongoose');

const ExerciseSchema = mongoose.Schema({
  workout: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'workouts',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  reps: {
    type: Number,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('exercise', ExerciseSchema);
