import React, {useState} from 'react'

import { ContentStyle } from './style'

export default function CriteriosPesquisa() {

    const [peso, setNewPeso] = useState(sessionStorage.getItem('peso'))

    
    return(
        <>
            <ContentStyle>
                <p>Critérios da Pesquisa</p>
                <p>{`peso: ${peso}`}</p>
            </ContentStyle>
        </>
    )
}