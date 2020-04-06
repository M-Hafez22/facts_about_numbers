import React, {useState, createContext}from "react";


export const NumberContext = createContext();

export function NumberProvider(props) {
    const [number, setNumber] = useState("");

    return(
    <NumberContext.Provider value={[number, setNumber]}>
        {props.children}
    </NumberContext.Provider>
    )
}

