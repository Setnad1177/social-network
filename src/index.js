import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11}
]
let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"}
]
let messages = [
    {id: 1, message: 'I\'ve learned my lesson. No more flaming people online unless it\'s 100% anonymously.'},
    {id: 2, message: "See you in a few days. The house is going to take some cleaning."},
    {id: 3, message: "Can't believe you're a movie producer! You're almost cool, Pop!"},
    {id: 4, message: "Just let me know you're ok?"},
    {id: 5, message: "I hope none of this stuff I'm seeing on the news has anything to do with you."},
    {
        id: 6, message: "Are you guys on vacation? Haven't seen anyone at the house for a while? Just being a good neighbor! "
    }
]
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
