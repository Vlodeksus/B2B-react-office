import { combineReducers, createStore } from "redux";
import { ProfileInfoReducer } from './ProfileInfo-reducer';
import { dialogsReducer } from './dialogs-reducer';

let reducers = combineReducers (
    {
        profilePage: ProfileInfoReducer,
        dialogsPage: dialogsReducer
    }
)

let store = createStore (reducers);

export default store;