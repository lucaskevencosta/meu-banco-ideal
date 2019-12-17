import React, {useState} from 'react'

import { ContentStyle } from './style'

export default function CriteriosPesquisa() {

    const [objCriterioList, setNewObjCriterioList] = useState({
        peso: localStorage.getItem('peso') ? localStorage.getItem('peso') : false,
        inicioRelacionamento: localStorage.getItem('inicioRelacionamento') ? localStorage.getItem('inicioRelacionamento') : false,
        ted: localStorage.getItem('ted') ? localStorage.getItem('ted') : false,
        saque: localStorage.getItem('saque') ? localStorage.getItem('saque') : false,
        extrato: localStorage.getItem('extrato') ? localStorage.getItem('extrato') : false,
        anuidade: localStorage.getItem('anuidade') ? localStorage.getItem('anuidade') : false,
    })

    
    return(
        <>
            <ContentStyle>
                <h3>Critérios da Pesquisa:</h3>
                
                <input 
                    type="checkbox" 
                    disabled 
                    checked={objCriterioList.peso} />Peso
                <br />

                <input 
                    type="checkbox" 
                    disabled 
                    checked={objCriterioList.inicioRelacionamento} />Inicio do Relacionamento
                <br />

                <input
                    type="checkbox" 
                    disabled 
                    checked={objCriterioList.ted} /> TED
                <br />

                <input
                    type="checkbox" 
                    disabled 
                    checked={objCriterioList.saque} /> Saque
                <br />
                
                <input
                    type="checkbox" 
                    disabled 
                    checked={objCriterioList.extrato} /> Extrato
                <br />

                <input
                    type="checkbox" 
                    disabled 
                    checked={objCriterioList.anuidade} /> Anuidade
                <br />
            </ContentStyle>
        </>
    )
}