var ProfileController = require('./ProfileController')
var PostController = require('./PostController')
var CommentController = require('./CommentController')
var MarkersController = require('./MarkersController')

module.exports = {

	post: PostController,
	comment: CommentController,
	profile: ProfileController,
	markers: MarkersController
	
}