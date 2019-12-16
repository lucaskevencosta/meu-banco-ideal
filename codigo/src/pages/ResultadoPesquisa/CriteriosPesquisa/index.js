import React, {useState} from 'react'

import { ContentStyle } from './style'

export default function CriteriosPesquisa() {

    const [objCriterioList, setNewObjCriterioList] = useState({
        peso: localStorage.getItem('peso'),
        inicioRelacionamento: localStorage.getItem('inicioRelacionamento'),
        ted: localStorage.getItem('ted'),
        saque: localStorage.getItem('saque'),
        extrato: localStorage.getItem('extrato'),
        anuidade: localStorage.getItem('anuidade'),
    })

    
    return(
        <>
            <ContentStyle>
                <p>Critérios da Pesquisa</p>
                <p>{`peso: ${objCriterioList.peso}`}</p>
                <p>{`inicioRelacionamento: ${objCriterioList.inicioRelacionamento}`}</p>
                <p>{`ted: ${objCriterioList.ted}`}</p>
                <p>{`saque: ${objCriterioList.saque}`}</p>
                <p>{`extrato: ${objCriterioList.extrato}`}</p>
                <p>{`anuidade: ${objCriterioList.anuidade}`}</p>
            </ContentStyle>
        </>
    )
}