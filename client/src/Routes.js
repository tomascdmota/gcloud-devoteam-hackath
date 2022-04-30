import React from 'react';

import {  BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';


// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';
import Home from './pages/client/index';
import Produtos from './pages/admin/produtos';




// IMPORTS CLIENT
import ProdutoCadastrar from './pages/admin/produtos/Produtos.cadastrar';
import Login from './pages/admin/login';
import cadastrar from './pages/admin/login/cadastar'
//import PrivateRoute from './services/wAuth';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                {/* Rota Cliente */}
                <Route path="/" exact component={Home} />
           
                <Route path="/produtos/:idProduto" exact component={ProdutoDetails} />

                
                <Route path="/admin/login" exact component={Login} />
                <Route path="/admin" exact component={Dashboard} />
                
                <Route path="/admin/produtos" exact component={Produtos} />
                
                <Route path="/admin/produtos/cadastrar" exact component={ProdutoCadastrar} />
           
                <Route path="/admin/cadastrar" exact component={cadastrar} />
             
            </Switch>
        </BrowserRouter>
    )
}