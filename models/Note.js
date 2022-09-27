const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxlength: [40, "Title cannot be more than 40"],
  },

  description: {
    type: String,
    required: true,
    maxlength: [200, "Description cannot be more than 40"],
  },
});

module.exports = mongoose.models("Note", NoteSchema);
