import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import { ContentStyle, BoxStyle, BoxBotton, ButtonPesquisar } from './style'
import Icon1 from '../../imagens/icon1.png'
import Icon2 from '../../imagens/icon2.png'
import Icon3 from '../../imagens/icon3.png'
import Icon4 from '../../imagens/icon4.png'

export default function PesquisaDetalhada() {
    
    const [peso, setNewPeso] = useState(0)
    const [inicioRelacionamento, setNewInicioRelacionamento] = useState(false)
    const [ted, setNewTed] = useState(false)
    const [saque, setNewSaque] = useState(false)
    const [extrato, setNewExtrato] = useState(false)
    const [anuidade, setNewAnuidade] = useState(false)
    

    useEffect(()=>{
        localStorage.clear()
    }, [])
    
    return(
        <>
            <Header texto="Pesquisa Detalhada" />
            <ContentStyle>
                <BoxStyle>
                    <a href="#">
                        <BoxBotton>
                            <p>
                                <img src={Icon1}/>
                                Agilidade
                            </p>
                        </BoxBotton>
                    </a>
                    
                    <center>
                        <form method="post">
                            <input type="range" min="0" max="100" step="10" id="range" />
                        </form>
                    </center>

                    <br/><br/>
                    
                    <form method="post">
                        <input type="checkbox" name="OPCAO" /> Menor tempo p/ transferência
                        <br/><br/>
                        <input type="checkbox" name="OPCAO" /> Praticidade p/ realizar transferência
                        <br/><br/>
                        <input type="checkbox" name="OPCAO" /> Melhores atendimentos
                    </form>

                </BoxStyle>

                <BoxStyle>
                    <a href="#">
                        <BoxBotton>
                            <p>
                                <img src={Icon2}/>
                                Economia
                            </p>
                        </BoxBotton>
                    </a>
                    
                    <form onSubmit={()=>{}}>
                        <center>
                            <input type="range" min="1" max="3" step="1"
                                value={peso}
                                onChange={(e)=> {
                                    setNewPeso(e.target.value)
                                    localStorage.setItem('peso', peso)
                                }
                            }/>
                        </center>
                        <br/><br/>

                        <input type="checkbox" name="OPCAO"
                            value={inicioRelacionamento}
                            onChange={()=> {
                                let newValue
                                if(inicioRelacionamento){
                                    newValue = false
                                }
                                else {
                                    newValue = true
                                }

                                setNewInicioRelacionamento(newValue)
                                localStorage.setItem('inicioRelacionamento', newValue)

                            }}/> Inicio de Relacionamento
                        <br/><br/>

                        <input type="checkbox" name="OPCAO" 
                            value={ted}
                            onChange={()=> {
                                let newValue
                                    
                                if(ted){
                                    newValue = false
                                }
                                else {
                                    newValue = true
                                }

                                setNewTed(newValue)
                                localStorage.setItem('ted', newValue)
                            }}/> TED via Aplicação
                        <br/><br/>

                        <input type="checkbox" name="OPCAO" 
                            value={saque} 
                            onChange={(e)=> {
                                let newValue

                                if(saque){
                                    newValue = false
                                }
                                else{
                                    newValue = true
                                }
                                    
                                setNewSaque(newValue)
                                localStorage.setItem('saque', newValue)
                            }}/> Saques
                        <br/><br/>

                        <input type="checkbox" name="OPCAO" 
                            value={extrato}
                            onChange={(e)=> {
                                let newValue
                                
                                if(extrato){
                                    newValue = false
                                }
                                else{
                                    newValue = true
                                }

                                setNewExtrato(newValue)
                                localStorage.setItem('extrato', newValue)
                            }}/> Extratos / Saldos
                        <br/><br/>

                        <input type="checkbox" name="OPCAO" 
                            value={anuidade}
                            onChange={()=> {
                                let newValue

                                if(anuidade){
                                    newValue = false
                                }
                                else {
                                    newValue = true
                                }

                                setNewAnuidade(newValue)
                                localStorage.setItem('anuidade', newValue)
                            }}/> Anuidade Cartão Básico
                        
                        <Link to="/resultado-da-pesquisa">
                            <ButtonPesquisar type="submit">Pesquisar</ButtonPesquisar>
                        </Link>
                    </form>

                </BoxStyle>

                <BoxStyle>
                    <a href="#">
                        <BoxBotton>
                            <p>
                                <img src={Icon3}/>
                                Rentabilidade
                            </p>
                        </BoxBotton>
                    </a>
                    
                    <center>
                        <form method="post">
                            <input type="range" min="0" max="100" step="10" id="range" />
                        </form>
                    </center>

                    <br/><br/>
                    
                    <form method="post">
                        <input type="checkbox" name="OPCAO" /> Renda Fixa
                        <br/><br/>
                        <input type="checkbox" name="OPCAO" /> Renda Variável
                        <br/><br/>
                        <input type="checkbox" name="OPCAO" /> Liquidez Diária
                    </form>

                </BoxStyle>

                <BoxStyle>
                    <a href="#">
                        <BoxBotton>
                            <p>
                                <img src={Icon4}/>
                                Segurança
                            </p>
                        </BoxBotton>
                    </a>
                    
                    <center>
                        <form method="post">
                            <input type="range" min="0" max="100" step="10" id="range" />
                        </form>
                    </center>

                    <br/><br/>
                    <form method="post">
                        <input type="checkbox" name="OPCAO" /> Seguro FGC
                        <br/><br/>
                        <input type="checkbox" name="OPCAO" /> Acesso Seguro
                    </form>

                </BoxStyle>

                
            </ContentStyle>
        </>
    )
}