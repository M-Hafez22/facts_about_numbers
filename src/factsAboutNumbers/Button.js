import React from 'react'

export default function Button({name}) {
    return (
        <div>
            <button className="type__buttons__btn">
                {name}
            </button>
        </div>
    )
}
