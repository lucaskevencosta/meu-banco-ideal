import React from 'react'
import { HeaderStyle } from './style'
import logo from '../../imagens/logo.png'

export default function Header() {
    return(
        <>
            <HeaderStyle>
                <img src={logo} />
                <h1>Meu Banco Ideal</h1>
            </HeaderStyle>
        </>
    )
}