const ADD_POST = "ADD POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Привіт, як справи?", likesCount: 23 },
    { id: 2, message: "Дякую, все гаразд", likesCount: 19 },
  ],
  newPostText: "Learning React",
}

export const ProfileInfoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST: {
        let newPost = {
          id: 6,
          message: state.newPostText,
          likesCount: 22,
        };
        //Робимо копію state (ми не можемо змінювати об'єкт який до нас приходить)
        return {...state,
          posts: [...state.posts, newPost],
          newPostText: "" 
        };             
        // stateCopy.posts = [...state.posts];     //створюємо глибоку копію
        // stateCopy.posts.push(newPost);
        // stateCopy.newPostText = "";
        // state.posts.push(newPost);
        // state.newPostText = "";
        //return state;
        // return stateCopy;
      }
      case UPDATE_NEW_POST_TEXT: {
        return {...state,
          newPostText: action.newText
        }
        // stateCopy.newPostText = action.newText;
        // state.newPostText = action.newText;
        // return state; 
        // return stateCopy;
      }
      default: 
        return state;
      }
    }

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
        // if (action.type === ADD_POST) {
        //   let newPost = {
        //     id: 6,
        //     message: state.newPostText,
        //     likesCount: 22,
        //   };
        //   state.posts.push(newPost);
        //   state.newPostText = ""; //Зануляємо не в UI а в state
//     } else if (action.type === UPDATE_NEW_POST_TEXT) {
//           state.newPostText = action.newText;
//     } 

//     return state;
// }
     
