import React from 'react'
import Header from "./Header"
import Main from "./Main"

import './styles/main.scss'


export default function App() {
    return (
        <div  className="page">
            <Header /> 
            <Main />
        </div>
    )
}
