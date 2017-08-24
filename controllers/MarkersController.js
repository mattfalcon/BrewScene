var Markers = require('../models/Markers')
var Promise = require('bluebird')
var bcrypt = require('bcryptjs')

module.exports = {
	get: function(){
		return new Promise(function(resolve, reject){
			Markers.find({}, function(err, markers){
				if (err){
					reject(err)
					return
				}

                resolve(markers)
			})
		})
	},
}
