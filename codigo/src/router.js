import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import MelhorParaVoce from './pages/MelhorParaVoce'
import PesquisaDetalhada from './pages/PesquisaDetalhada'
import ResultadoPesquisa from './pages/ResultadoPesquisa'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/melhor-para-voce" component={MelhorParaVoce} />
                <Route exact path="/pesquisa-detalhada" component={PesquisaDetalhada} />
                <Route exact path="/resultado-da-pesquisa" component={ResultadoPesquisa} />
            </Switch>
        </BrowserRouter>
    )
}