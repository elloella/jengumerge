const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddBPStatsSchema = new mongoose.Schema({
  date:{
      type: Date,
      default: Date.now
  },
  breakfast: {
      type: String,
      required: true
  },
  lunch: {
      type: String,
      required: true
  },
  dinner: {
      type: String,
      required: true
  },
  night: {
      type: String,
      required: true
  },
  notes: {
      type: String,
      required: true
  },
  userid:{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }

})

const AddBPStats = mongoose.model('AddBPStats' , AddBPStatsSchema);

module.exports = AddBPStats;
