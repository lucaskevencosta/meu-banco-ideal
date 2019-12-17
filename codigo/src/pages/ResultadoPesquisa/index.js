import React from 'react'
import Header from '../../components/Header'

import CriteriosPesquisa from './CriteriosPesquisa'
import AvaliacoesBancos from './AvaliacoesBancos'

import { ContentStyle, LeftColumnStyle, RightColumnStyle } from './style'

export default function Home() {

    return (
        <>
            <Header texto="Resultado da pesquisa" />

            <ContentStyle>
                <LeftColumnStyle>
                    <CriteriosPesquisa />
                </LeftColumnStyle>

                <RightColumnStyle>
                    <AvaliacoesBancos />
                </RightColumnStyle>
            </ContentStyle>
        </>
    )
}