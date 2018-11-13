import React, { Component } from 'react'
import './Style.css'

class Error extends Component {

    state = {
        hasAnError: false
    }

    static getDerivedStateFromError(error) {
        return { hasAnError: true}
    }

    componentDidCatch(error, info) {
        alert('Oops! looks like something went wrong loading the map!' + error)
    }
    render() {
        if (this.setState.hasAnError) {
            return <h2>Oops!</h2>
        } 
        return this.props.children
    }
}

export default Error;