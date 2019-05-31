const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddBPStatsSchema = new mongoose.Schema({
    timeStamp:{
        type: Date,
        default: Date.now
    },
    date:{
      type: String,
      required: true
    },
    systolic: {
        type: Number,
        required: true
    },
    diastolic: {
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

const AddBPStats = mongoose.model('AddBPStats' , AddBPStatsSchema);

module.exports = AddBPStats;
