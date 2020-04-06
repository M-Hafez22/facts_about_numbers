import React from 'react'
import Type from './Type'
import Input from './Input'
import Facts from './Facts'
import {TypeProvider} from "./TypeContext";


export default function Main() {
    return (
        <main>
            <TypeProvider>
                <Type />
                <Input />
                <Facts />
            </TypeProvider>
        </main>
    )
}
