import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps' 

class Map extends Component {
	constructor(){
		super()
		this.state = {
			map: null,
			openedMarkers: {}
		}
	}

	mapDragged(){
		var latLng = this.state.map.getCenter().toJSON()
//		console.log('mapDragged: '+JSON.stringify(latLng))
		this.props.mapMoved(latLng)

	}

	closeMarkerInfo(id) {
		let openedMarkers = this.state.openedMarkers;
		openedMarkers[id] = undefined;
		this.setState({openedMarkers});
	}

	showInfoWindow(id) {
		let openedMarkers = this.state.openedMarkers;
		openedMarkers[id] = true;
		this.setState({openedMarkers});
	}

	renderInfoWindow(marker) {
		return (
			<InfoWindow key={marker._id} onCloseclick={() => this.closeMarkerInfo(marker._id)}>
				<div>
					<p>Name: {marker.name}</p>
					<p>Hours: {marker.hours}</p>
				</div>
			</InfoWindow>
		);
	}

	render(){
		const mapContainer = <div style={{minHeight:600, height:'80%', width:'100%'}}></div>
		return (
		    <GoogleMapLoader
		        containerElement = { mapContainer }
		        googleMapElement = {
			        <GoogleMap
			            ref={ (map) => {
				            	if (this.state.map != null)
				            		return

			            		this.setState({map: map})
			             	} 
			         	}

			            defaultZoom={this.props.zoom}
			            defaultCenter={this.props.center}
			            onDragend={this.mapDragged.bind(this)}
			            options={{streetViewControl: false, mapTypeControl: false}}>
						{this.props.markers.map(marker => (
						<Marker
							onClick={() => this.showInfoWindow(marker._id)}
							{...marker}
						>
						{this.state.openedMarkers[marker._id] ? this.renderInfoWindow(marker) : null} 
						</Marker>
						))}
			        </GoogleMap>
		    	} />
		)
	}
	
}

export default Map