import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './selfRedux/state';
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state) => {
ReactDOM.render(

        <App state={state} addPost={addPost}/>
, document.getElementById('root'));
}

