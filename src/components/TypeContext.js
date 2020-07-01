import React, {useState, createContext} from 'react'

export const TypeContext = createContext();

export function TypeProvider(props) {
    
    const [type, setType] = useState("number");

    return(
    <TypeContext.Provider value={[type, setType]}>
        {props.children}
    </TypeContext.Provider>
    )
}