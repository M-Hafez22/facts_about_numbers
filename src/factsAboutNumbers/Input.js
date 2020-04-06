import React, {useContext} from 'react'
import {NumberContext} from "./NumberContext";


export default function Input() {

    const [number, setNumber] = useContext(NumberContext);

    const changeNumber = (event) => {
        setNumber(event.target.value);
        console.log(event.target.value)
    }


    return (
        <div>
            <input 
                type="number"
                value={number}
                onChange={changeNumber}
                autoComplete="off" required/>

            <label  className="label-number">
                <span className="content">Enter a Number</span>
            </label>
        </div>
    )
}
