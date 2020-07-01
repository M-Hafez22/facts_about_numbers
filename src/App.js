import React from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import './styles/main.scss'


export default function App() {
    return (
        <div  className="page">
            <Header />
            <Main />
        </div>
    )
}
