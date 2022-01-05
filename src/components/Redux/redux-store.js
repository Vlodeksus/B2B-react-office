import { combineReducers, createStore } from "redux";
import { ProfileInfoReducer } from './ProfileInfo-reducer';
import { dialogsReducer } from './dialogs-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers (
    {
        profilePage: ProfileInfoReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer
    }
)

let store = createStore (reducers);

window.store = store;

export default store;