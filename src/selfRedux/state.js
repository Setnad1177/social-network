let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi, how are you?', likesCount: 12}, {
                id: 2, message: "It's my first post", likesCount: 11
            }], newPostText: 'it-kama.com'

        }, dialogsPage: {
            messages: [{
                id: 1, message: 'I\'ve learned my lesson. No more flaming people online unless it\'s 100% anonymously.'
            }, {id: 2, message: "See you in a few days. The house is going to take some cleaning."}, {
                id: 3, message: "Can't believe you're a movie producer! You're almost cool, Pop!"
            }, {id: 4, message: "Just let me know you're ok?"}, {
                id: 5, message: "I hope none of this stuff I'm seeing on the news has anything to do with you."
            }, {
                id: 6,
                message: "Are you guys on vacation? Haven't seen anyone at the house for a while? Just being a good neighbor! "
            }], dialogs: [{id: 1, name: 'Dimych'}, {id: 2, name: "Andrey"}, {id: 3, name: "Sveta"}, {
                id: 4, name: "Sasha"
            }, {id: 5, name: "Viktor"}, {id: 6, name: "Valera"}]
        }
    },
    getState () {
        return this._state;
    },
    _callSubscriber () {
        console.log('State has been changed');
    },
    addPost () {
        let newPost = {
            id: 5, message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer; //observer (pattern)
    } // fix

}






export default store;
window.state = store;
// store - OOP