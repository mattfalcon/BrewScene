var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarkersSchema = new Schema({
  name:  String,
  hours: String,
  hourstwo: String,
  location: {
    lag: Number,
    lat:  Number
  }
});

module.exports = mongoose.model('Markers', MarkersSchema);