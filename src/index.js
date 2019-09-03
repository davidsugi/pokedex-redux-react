import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './page';
import Detail from './page/PokemonDetail';

import MyPoke from './page/MyPokemonList';
import MyPokeDetail from './page/MyPokemonDetail';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {configureStore, history} from './configure-store'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { loadState,saveState } from './localStorage';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: red[600]
        }
    }
}, )

const presistState = loadState();
const store = configureStore(presistState)

store.subscribe(()=>{
    saveState({
        my_pokemon: store.getState().my_pokemon
    })
})


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <ConnectedRouter history={history}> 
                <Switch>
                <Route exact path="/" render={() => <App />} />
                <Route exact path="/my_poke" render={() => <MyPoke />} />
                <Route path="/my_poke/:id" render={() => <MyPokeDetail />} />
                <Route path="/:id" render={() => <Detail />} />
                <Route render={() => (<div>Miss</div>)} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
