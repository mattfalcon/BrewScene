import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { postReducer, accountReducer, markersReducer } from '../reducers'

var store;

export default {
	configureStore: () => {
		const reducers = combineReducers({
			post: postReducer,
			account: accountReducer,
			markers: markersReducer
		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}