const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const typeEventsSchema = new Schema({
   name: {
      type: String,
      unique: true,
      required: true
   }
})

const TypeEvent = mongoose.model('TypeEvents', typeEventsSchema);
module.exports = TypeEvent