import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

import { ContentStyle, BoxStyle, BoxBotton, BoxButton, ContentBoxButton } from './style'
import Icon1 from '../../imagens/icon1.png'
import Icon2 from '../../imagens/icon2.png'
import Icon3 from '../../imagens/icon3.png'
import Icon4 from '../../imagens/icon4.png'
import Icon5 from '../../imagens/icon5.png'

export default function MelhorParaVoce() {
    return(
        <>
            <Header texto="O que é melhor para você?" />
            
            <ContentStyle>
                
                <BoxStyle>
                    <BoxBotton>
                        <p><img src={Icon1}/>Agilidade</p>
                    </BoxBotton>
                    <br />
                    - Transferências mais rápidas (TED/DOC)
                    <br/><br/>
                    - Maiores limites para transferências
                    <br/><br/>
                    - Facilidade de realizar Transferências
                </BoxStyle>

                <BoxStyle>
                    <BoxBotton>
                        <p><img src={Icon2}/>Economia</p>
                    </BoxBotton>
                    <br/>
                    - Vantagens de relacionamento
                    <br/><br/>
                    - TED pelo Aplicativo
                    <br/><br/>
                    - Anuidade no Cartão Básico
                    <br/><br/>
                    - Saques
                    <br/><br/>
                    - Extratos e Saldos
                </BoxStyle>
                
                <BoxStyle>
                    <BoxBotton>
                        <p><img src={Icon3}/>Rentabilidade</p>
                    </BoxBotton>
                    <br/>
                    - Possibilidade de investir o dinheiro guardado
                    <br/><br/>
                    - Melhores carteiras de investimento
                    <br/><br/>
                    - Liquidez diária
                </BoxStyle>

                <BoxStyle>
                    <BoxBotton>
                        <p><img src={Icon4}/>Segurança</p>
                    </BoxBotton>
                    <br/>
                    - Maior segurança na hora de guardar e investir seu dinheiro
                    <br/><br/>
                    - Bancos que possuem garantia FGC na hora de investir seu dinheiro
                </BoxStyle>

            </ContentStyle>

            <ContentStyle>
                <Link to="pesquisa-detalhada">
                    <ContentBoxButton>
                        <BoxButton>
                            <img src={Icon5}/><p>Pesquisa Detalhada</p>
                        </BoxButton>
                    </ContentBoxButton>
                </Link>
            </ContentStyle>
        </>
    )
}