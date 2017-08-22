import React, { Component } from 'react'
import MapNavigation from '../containers/MapNavigation'

class Sidebar extends Component {
    render(){
        return (
            <header id="header">
            <div className="inner">
                <MapNavigation />
             </div>
            </header>
        )
    }
}

export default Sidebar 