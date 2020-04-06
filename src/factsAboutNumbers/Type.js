import React from 'react'
import Button from './Button'

export default function Type() {

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

    const buttons = types.map(item => (
        <Button 
            key={item.id} 
            name={item.name}
        />
        ))


    return (
        <div>
            {buttons}
        </div>
    )
}
