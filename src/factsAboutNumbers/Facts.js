import React, {useState, useContext, useEffect} from 'react'
import {TypeContext} from "./TypeContext";
import {NumberContext} from "./NumberContext";

export default function Facts() {

    const [fact, setFact]=useState("");
    const [isLoading, setLoading]=useState(false);
    const [type] = useContext(TypeContext);
    const [number] = useContext(NumberContext);

    useEffect(() => {
        setLoading(true)
        console.log(isLoading)
        fetch(`http://numbersapi.com/${number}${type === "number" ? "" : "/"+type}`)
            .then((resp) => resp.text())
            .then((data) => {
                console.log(data);
                number !== "" && setFact(data);
                setLoading(false);
            })
    },[type, number])


    return (
        <div>
            <h1>Fact</h1>
        </div>
    )
}
