import React from 'react'

import { Link } from 'react-router-dom'

import { HeaderStyle } from './style'
import logo from '../../imagens/logo.png'

export default function Header(props) {
    return(
        <>
            <HeaderStyle>
                <Link to="/">
                    <img src={logo} />
                </Link>

                <h1>{props.texto}</h1>
            </HeaderStyle>
        </>
    )
}