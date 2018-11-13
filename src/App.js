import React, { Component } from 'react';
import Map from './Map.js'
import './App.css';
import './Style.css'
import SquareAPI from './FourAPI.js';
import TopNav from './TopNav.js'
import SideMenu from './SideMenu.js';

class App extends Component {

  state = {
    venues: [],
    markers: [],
    openMenu: true,
    updateToTheState: element => {
      this.setState(element)
    }
  }

  /* open and closes the side menu */
  toggle = () => {
    this.setState(state =>({
      openMenu: !state.openMenu
    }))
  }

  markerClose = () => {
    let markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    })
    this.setState({ markers: Object.assign(this.state.markers, markers )})
  }

/*handles the infowindow when marker is clicked on map */
  markerClick = (marker) => {
    this.markerClose()
    marker.isOpen = true;
    this.setState({
      markers: Object.assign(this.state.markers, marker)
    });
    let venue = this.state.venues.find(venue => venue.id === marker.id)
    SquareAPI.getVenueDetails(marker.id).then(res => {
      let fresh = Object.assign(venue, res.response.venue)
      this.setState({ venues: Object.assign(this.state.venues, fresh )})
    })
  }

/* allows the list items on the sidebar menu to correspond to the markers on the map */
  sideBarClick = venue => {
    let marker = this.state.markers.find(element => element.id === venue.id);
    this.markerClick(marker)
}
  
/* searches the FoursquareAPI and returns the information from the server */
  componentDidMount() {
    SquareAPI.search({
      ll: "28.688239,-81.399993",
      query: "restaurant",
      limit: 10
    }).then(theVenues => {
      let { venues } = theVenues.response;
      let markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true,
          id: venue.id
        }
      });
      this.setState({ venues, markers })
    });
  }

  render() {
    return (
      <div className="App">
        <TopNav toggle={this.toggle}/>
        <SideMenu openMenu={this.state.openMenu} {...this.state} sideBarClick={this.sideBarClick}/>
        <Map {...this.state} markerClick={this.markerClick}/>
      </div>
    );
  }
}

export default App;
