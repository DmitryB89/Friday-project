import {combineReducers, createStore, legacy_createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {passwordReducer} from "./passwordReducer";
import {registerReducer} from "./registerReducer";

export const rootReducer = combineReducers({
    profile: profileReducer,
    register: registerReducer,
    password:passwordReducer
})

export const store = legacy_createStore(rootReducer)
