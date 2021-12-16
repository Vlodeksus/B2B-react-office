import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/Redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
// import {addPost} from './components/Redux/state';
import reportWebVitals from './reportWebVitals';
// import {  updateNewPostText } from './components/Redux/state';

let rerenderEntiredTree = (state) => {
  ReactDOM.render(
      <React.StrictMode>
      <BrowserRouter>
          <App 
          state={store.getState()} 
          //Заміняємо addPost на dispatch а updateNewPostText видаляємо бо він є в dispatch
          dispatch={store.dispatch.bind(store)}
          store={store}
        //   addPost={store.addPost.bind(store)}
        //   updateNewPostText={store.updateNewPostText.bind(store)}
          />
      </BrowserRouter>
      </React.StrictMode>,
  document.getElementById('root')
      ); 
};


rerenderEntiredTree (store.getState());

store.subscribe(rerenderEntiredTree);


reportWebVitals();
