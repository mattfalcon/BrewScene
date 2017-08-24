var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarkersSchema = new Schema({
  name:  String,
  hours: Number,
  location: {
    lag: Number,
    lat:  Number
  }
});

module.exports = mongoose.model('Markers', MarkersSchema);