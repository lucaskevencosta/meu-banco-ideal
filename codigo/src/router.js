import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import PesquisaDetalhada from './pages/PesquisaDetalhada'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pesquisa-detalhada" component={PesquisaDetalhada} />
            </Switch>
        </BrowserRouter>
    )
}