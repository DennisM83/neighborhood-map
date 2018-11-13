import React, { Component } from 'react';
import './Style.css';
import TheList from './TheList.js'

class SideMenu extends Component {
    /* this sets the query for the filter */
    state = {
        query: '',
        restaurants: []
    }

/* filters through the list of restaurants and returns the names on the side menu */
    filterTheVenues = () => {
        if(this.state.query.trim() !== "") {
            let restaurants = this.props.venues.filter(venue => venue.name.toLowerCase().includes(this.state.query.toLowerCase()))
            return restaurants
        }
        return this.props.venues
    }

    /*this updates the query when the user enters in a character */
    reviseQuery = (event) => {
        this.setState({
            query: event.target.value
        })
        
        let markers = this.props.venues.map(venue => {
            let doesMatch = venue.name.toLowerCase().includes(event.target.value.toLowerCase())
            let marker = this.props.markers.find(element => element.id === venue.id);
            if(doesMatch) {
                marker.isVisible = true;
            } else {
                marker.isVisible = false;
            }
            return marker;
        });
        this.props.updateToTheState({markers})
    }

    render() {
        return (
            <div className="sideMenu" role="listitem" tabIndex="1">
            {/* checks the toggle open and close */}
                {this.props.openMenu &&
                    <nav className="navbar navbar-dark bg-dark" id="navMenu">
                        <span className="navbar-span" id="navbar-span">
                        Local Eats
                        {/* the filter for the list items */}
                        <form className="form-inline align-items-center col-auto">
                            <input className="form-control mr-sm-1" type="search" placeholder="Filter Restaurants" value={this.state.query} onChange={this.reviseQuery} aria-label="filter"/>
                            <TheList 
                                {...this.props}
                                venues={this.filterTheVenues()}
                                sideBarClick={this.props.sideBarClick}
                            />
                        </form>
                        </span>
                    </nav>
                }
            </div>
        )
    }
}

export default SideMenu;