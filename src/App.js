import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {Layout,Typography, Space} from 'antd';

import {Navbar, Homepage, Cryptocurrencies, CryptoDetails} from './components';
import './App.css';

const App = () => {
    return (

        <div className="app">
            <div className = "navbar">
                <Navbar />
            </div>
            <div className="main">
                    <div className="routes">
                        <Switch>
                            <Route exact path = "/">
                                <Homepage />
                            </Route>
                            <Route exact path = "/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path = "/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                        </Switch>
                    </div>
            </div>
            <div className="footer">

            </div>
        </div>
    );
};

export default App;