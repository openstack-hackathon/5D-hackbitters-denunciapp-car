const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const plateSchema = new Schema({
  plate: { type: String, required: true },
  confidence:  { type: Number, required: true },
  capturedTime: { type: Date, required: true },
  uuidCamera: { type: String, required: true },
  createTime: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Plate', plateSchema);
