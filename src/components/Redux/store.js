import {mainReducer} from './main-reducer';
import {dialogsReducer} from './dialogs-reducer';

// const ADD_POST = "ADD POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
// const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Привіт, як справи?", likesCount: 23 },
        { id: 2, message: "Дякую, все гаразд", likesCount: 19 },
      ],
      newPostText: "Learning React",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Volodymyr" },
        { id: 2, name: "Tom" },
        { id: 3, name: "Oleg" },
        { id: 4, name: "Olga" },
        { id: 5, name: "Anna" },
      ],
      messages: [
        { id: 1, message: "Hello!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Hello people" },
        { id: 4, message: "Wooow!" },
        { id: 5, message: "Nice to see you!" }
      ],
      newMessageBody: "",
    },
  },
  //_callSubscriber замінена назва rerenderEntiredTree 
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  // addPost () {
  //   let newPost = {
  //     id: 6,
  //     message: this._state.mainPage.newPostText,
  //     likesCount: 22
  //   };
  //   this._state.mainPage.posts.push(newPost);
  //   this._state.mainPage.newPostText = '';   //Зануляємо не в UI а в state
  //   this._callSubscriber (this._state);
  // },
  // updateNewPostText (newText) {
  //   this._state.mainPage.newPostText = newText;
  //   this._callSubscriber (this._state);
  // },

  dispatch(action) {

    this._state.mainPage = mainReducer(this._state.mainPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
//     if (action.type === "ADD POST") {
//       let newPost = {
//         id: 6,
//         message: this._state.mainPage.newPostText,
//         likesCount: 22,
//       };
//       this._state.mainPage.posts.push(newPost);
//       this._state.mainPage.newPostText = ""; //Зануляємо не в UI а в state
//       this._callSubscriber(this._state);
// } else if (action.type === UPDATE_NEW_POST_TEXT) {
//       this._state.mainPage.newPostText = action.newText;
//       this._callSubscriber(this._state);
// } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//       this._state.dialogsPage.newMessageBody = action.body;
//       this._callSubscriber(this._state);
// } else if (action.type === SEND_MESSAGE) {
//       let body = this._state.dialogsPage.newMessageBody;
//       this._state.dialogsPage.newMessageBody = "";
//       this._state.dialogsPage.messages.push({ id: 6, message: body });
//       this._callSubscriber(this._state);
//     }
//   },
};

// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST,
//   };
// };

// export const updateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text,
//   };
// };

// export const sendMessageCreator = () => {
//   return {
//     type: SEND_MESSAGE,
//   };
// };

// export const updateNewMessageBodyCreator = (body) => {
//   return {
//     type: UPDATE_NEW_MESSAGE_BODY,
//     body: body,
//   };
// };

export default store;
Window.store = store;

// let rerenderEntiredTree = () => {
//   console.log('State was changed');
// };

// let state = {
//   mainPage: {
//       posts: [
//         {id: 1, message: 'Привіт, як справи?', likesCount: 23},
//         {id: 2, message: 'Дякую, все гаразд', likesCount: 19}
//       ],
//       newPostText: 'Learning React'

//   },

//   dialogsPage: {
//     dialogs: [
//       { id: 1, name: "Volodymyr" },
//       { id: 2, name: "Tom" },
//       { id: 3, name: "Oleg" },
//       { id: 4, name: "Olga" },
//       { id: 5, name: "Anna" },
//     ],

//     messages: [
//       { id: 1, message: "Hello!" },
//       { id: 2, message: "How are you?" },
//       { id: 3, message: "Hello people" },
//       { id: 4, message: "Wooow!" },
//       { id: 5, message: "Nice to see you!" },
//       { newMessageText: 'My app!'}
//     ]
//   }

// };

// export const addPost = () => {

//   let newPost = {
//     id: 6,
//     message: state.mainPage.newPostText,
//     likesCount: 22
//   };
//   state.mainPage.posts.push(newPost);
//   state.mainPage.newPostText = '';   //Зануляємо не в UI а в state
//   rerenderEntiredTree(state);
// };

// export const updateNewPostText = (newText) => {
//   state.mainPage.newPostText = newText;
//   rerenderEntiredTree(state);
// }

// export const subscribe = (observer) => {
//   rerenderEntiredTree = observer;
// };

// export default state;
