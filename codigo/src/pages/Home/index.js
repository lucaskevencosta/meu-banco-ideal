import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

import { ContentStyle, ButtonStyle } from './style'
import imgFundo from '../../imagens/fundo.jpg'

export default function Home() {
    return(
        <>
            <Header />
            
            <ContentStyle>
                <h3>Descubra qual é o banco que atende melhor as suas necessidades...</h3>
                <Link to="/pesquisa-detalhada">
                    <ButtonStyle>
                        Comparar
                    </ButtonStyle>
                </Link>
                <img src={imgFundo} />
            </ContentStyle>
        </>
    )
}