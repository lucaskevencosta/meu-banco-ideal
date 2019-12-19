import React, {useEffect} from 'react'
import firebase from 'firebase'

import { ExtratoSaldoInit, SaquesInit, AnuidadeInit, TedInit, InicioRelacionamentoInit } from './dados-init'
import Header from '../../components/Header'
import CriteriosPesquisa from './CriteriosPesquisa'
import AvaliacoesBancos from './AvaliacoesBancos'

import { ContentStyle, LeftColumnStyle, RightColumnStyle } from './style'

export default function Home() {

    const firebaseConfig = {
        apiKey: "AIzaSyA-dq4y9rz5eGskGweXjHYNXoms5PxXwa8",
        authDomain: "meu-banco-ideal-4981e.firebaseapp.com",
        databaseURL: "https://meu-banco-ideal-4981e.firebaseio.com",
        projectId: "meu-banco-ideal-4981e",
        storageBucket: "meu-banco-ideal-4981e.appspot.com",
        messagingSenderId: "296375232612",
        appId: "1:296375232612:web:c6cdb2f610a4833b1dd771"
    };

    let saques
    let extratoSaldo
    let anuidade
    let ted
    let inicioRelacionamento
    
    function dadosBancoInit(firebase) {
        saques = SaquesInit(firebase)
        extratoSaldo = ExtratoSaldoInit(firebase)
        anuidade = AnuidadeInit(firebase)
        ted = TedInit(firebase)
        inicioRelacionamento = InicioRelacionamentoInit(firebase)
    }
    
    useEffect(()=>{
        firebase.initializeApp(firebaseConfig)
        
        dadosBancoInit(firebase)
    }, [])
    
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