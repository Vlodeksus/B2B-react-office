import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost} from './components/Redux/state';
import reportWebVitals from './reportWebVitals';
import { updateNewPostText } from './components/Redux/state';

// export let rerenderEntiredTree = (state) => {
//     // console.log('state was changed');
  
//     ReactDOM.render(
//         <React.StrictMode>
//         <BrowserRouter>
//             <App 
//             // dialogs={dialogs} messages={messages} posts={posts}
//             state={state} 
//             addPost={addPost}
//             updateNewPostText={updateNewPostText}
//             />
//         </BrowserRouter>
//         </React.StrictMode>,
//     document.getElementById('root')
//         ); 
// };
