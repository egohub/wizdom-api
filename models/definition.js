const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/wizdom");

const definitionSchema = new mongoose.Schema({
  wotd: String,
  wordType: String,
  pronunciation: String,
  definition: String,
  example1: String,
  example2: String,
  didYouKnow: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Definition", definitionSchema);
