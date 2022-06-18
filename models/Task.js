const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('task', TaskSchema);
