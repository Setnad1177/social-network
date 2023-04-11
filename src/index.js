import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./selfRedux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}/*state={store.getState()}*/ dispatch={store.dispatch.bind(store)}/>
        , document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
