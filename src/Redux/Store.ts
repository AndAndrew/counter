import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {settingsReducer} from "./settingsReducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})

export const store = createStore(rootReducer);