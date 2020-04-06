import React from 'react'
import Type from './Type'
import Input from './Input'
import Facts from './Facts'
import {TypeProvider} from "./TypeContext";
import {NumberProvider} from "./NumberContext";


export default function Main() {
    return (
        <main>
            <TypeProvider>
            <NumberProvider>
                <Type />
                <Input />
                <Facts />
            </NumberProvider>
            </TypeProvider>
        </main>
    )
}
