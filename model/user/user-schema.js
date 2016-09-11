const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  plate: { type: String, required: true },
  modelCar: { type: Number, required: true },
  brandCar: { type: String, required: true }
});


module.exports = mongoose.model('User', userSchema);
