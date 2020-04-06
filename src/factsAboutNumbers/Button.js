import React, {useContext}  from 'react';
import {TypeContext} from "./TypeContext";

export default function Button({changeType, name}) {

    const [type] = useContext(TypeContext);

    return (
        <div>
            <button 
                className={`type__buttons__btn ${type === name ?  'active' : ""}`}
                onClick={(event) => changeType(event)}
            >
                {name}
            </button>
        </div>
    )
}
