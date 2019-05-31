const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddBSStatsSchema = new mongoose.Schema({ //Setting up the backend form for the addition of data
  timeStamp:{
      type: Date,
      default: Date.now
  },
  date:{
    type: String,
    required: true
  },
  breakfast: {
      type: Number,
      required: true
  },
  lunch: {
      type: Number,
      required: true
  },
  dinner: {
      type: Number,
      required: true
  },
  night: {
      type: Number,
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

const AddBSStats = mongoose.model('AddBSStats' , AddBSStatsSchema);

module.exports = AddBSStats;
