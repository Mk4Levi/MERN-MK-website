//
// requiring mongoose
const mongoose = require("mongoose");

// creating schema for data
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
});

// creating collecctions for the DB
const Project = new mongoose.model("Project", projectSchema);

module.exports = Project;
