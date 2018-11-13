import React from 'react'
import ToggleBtn from './ToggleButton.js'

const TopNav = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expanded-lg navbar-dark bg-dark" id="topbar">
                <div className="text-center container-fluid">
                    Neighborhood Map
                    <div className="col-xs-2" tabIndex="0">
                        <ToggleBtn toggle={props.toggle}/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TopNav;