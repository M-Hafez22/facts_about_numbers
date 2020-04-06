import React, {useContext} from 'react'
import Button from './Button'
import { TypeContext } from './TypeContext';

export default function Type() {

    const  [type, setType] = useContext(TypeContext);

    const types = [
        {
            id: 1,
            name:'number'
        }, 
         {
            id: 2,
            name:'year'
        }, 
         {
            id: 3,
            name:'math'
        }];


    const changeType = (event) => {
        console.log(event.currentTarget.textContent);
        setType(event.currentTarget.textContent);
    }


    const buttons = types.map(item => (
        <Button 
            key={item.id} 
            name={item.name}
            changeType={changeType}
        />
        ))


    return (
        <div className="type__buttons">
            {buttons}
        </div>
    )
}
