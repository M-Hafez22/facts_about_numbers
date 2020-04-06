import React from 'react'
import {TypeContext} from "./TypeContext";
import {NumberContext} from "./NumberContext";

export default function Facts() {

    const [fact, setFact]=useState("");
    const [isLoading, setLoading]=useState(false);
    const [type] = useContext(TypeContext);
    const [number] = useContext(NumberContext);


    return (
        <div>
            <h1>Fact</h1>
        </div>
    )
}
