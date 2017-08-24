import constants from '../constants'

var initialState = {
	currentLocation: {
		lat: 40.7504753,
		lng: -73.9932668
	},
    markers: null,
    loading: true
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type){
		case constants.MARKERS_RECEIVED:
			updated['markers'] = action.markers;
			updated['loading'] = false;
			return updated
		default:
			return updated

	}

}