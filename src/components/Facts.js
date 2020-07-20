import React, {useState, useContext, useEffect} from 'react'
import {TypeContext} from "./TypeContext";
import {NumberContext} from "./NumberContext";

export default function Facts() {

    const [fact, setFact]=useState("");
    const [isLoading, setLoading]=useState(false);
    const [type] = useContext(TypeContext);
    const [number] = useContext(NumberContext);

    useEffect(() => {
        let url = "http://numbersapi.com";
        setLoading(true)
        fetch(`${url}${number === "" ? "" : '/'+number}${type === "number" ? "" : "/"+type}`)
            .then((resp) => resp.text())
            .then((data) => {
                console.log("data");
                number !== "" && setFact(data);
                setLoading(false);
            })
    },[type, number])


    return (
        <div className="fact" id="fact"
        style={number === ""  || fact === "" ? {display:"none"} : {display:"block"}}>

            <p className="fact__text " id="factText">{fact}</p>

            <div className="loaders">
                <div style={isLoading ? {display: "block"}:{display: 'none'}} className="loader"></div>
            </div>

        </div>
    )
}
