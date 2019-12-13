import React from 'react'
import Header from '../../components/Header'

import { ContentStyle } from './style'
import CriteriosPesquisa from './CriteriosPesquisa'
import AvaliacoesBancos from './AvaliacoesBancos'

export default function Home() {

    return(
        <>
            <Header texto="Resultado da pesquisa" />
            
            <ContentStyle>
                <CriteriosPesquisa />
                <AvaliacoesBancos />
            </ContentStyle>
        </>
    )
}