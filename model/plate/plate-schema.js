const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const plateSchema = new Schema({
  plate: { type: String, required: true },
  confidence:  { type: Number },
  capturedTime: { type: Number }
});


module.exports = mongoose.model('Plate', plateSchema);
