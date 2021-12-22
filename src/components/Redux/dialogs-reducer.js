const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {

  let stateCopy = {...state};

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      stateCopy.newMessageBody = action.body;
      return stateCopy;
      // state.newMessageBody = action.body;
      // return state;
    }
    case SEND_MESSAGE: {
      let body = stateCopy.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return stateCopy; 
    }
    
    default:
      return state;
    }
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};





//     if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//         state.newMessageBody = action.body;
        
//   } else if (action.type === SEND_MESSAGE) {
//         let body = state.newMessageBody;
//         state.newMessageBody = "";
//         state.messages.push({ id: 6, message: body });
        
//       }
//     return state; 
// } 

