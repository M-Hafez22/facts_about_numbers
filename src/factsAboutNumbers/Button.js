import React from 'react'

export default function Button({changeType, name}) {
    return (
        <div>
            <button 
                className="type__buttons__btn"
                onClick={(event) => changeType(event)}
            >
                {name}
            </button>
        </div>
    )
}
