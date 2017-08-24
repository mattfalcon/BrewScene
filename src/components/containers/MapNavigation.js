import React, { Component } from 'react'
import { Map } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'

class MapNavigation extends Component {

		componentWillMount() {
		this.getCurrentPosition(() => {
			this.props.getMarkers();
		})
	}

	getCurrentPosition(callback){
		if (!navigator.geolocation) return callback();
		navigator.geolocation.getCurrentPosition((position) => {
			let location = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			this.setNewLocation(location);
			callback();
		}, 
		() => callback());
			
	}


	setNewLocation(location){
//		console.log('setNewLocation: '+JSON.stringify(location))
		this.props.updateCurrentLocation(location)
	}

	render(){
		if (this.props.markers.loading) {
			return <div>Loading...</div>
		}

		return (
			<div>
				<Map 
					center={this.props.posts.currentLocation}
					zoom={10} 
					markers={this.props.markers.markers}
					mapMoved={this.setNewLocation.bind(this)}
					 />
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		posts: state.post,
		markers: state.markers
	}
}

const dispatchToProps = (dispatch) => {
	return {
		updateCurrentLocation: (location) => dispatch(actions.updateCurrentLocation(location)),
		getMarkers: () => dispatch(actions.getMarkers())

	}
}

export default connect(stateToProps, dispatchToProps)(MapNavigation)


