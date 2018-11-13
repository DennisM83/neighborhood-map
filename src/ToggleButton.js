import React from 'react'

const ToggleBtn = (props) => {
    return (
        <button type="button" className="btn btn-secondary col-xs-2" onClick={props.toggle} aria-pressed="false">
            <span>X</span>
        </button>
    )
}

export default ToggleBtn;