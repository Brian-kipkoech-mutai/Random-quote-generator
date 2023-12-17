import indexReducer from "./indexReducer";
import { combineReducers } from "redux";



const  rootReducer=combineReducers({

    indexReducerRoot:indexReducer
})

export  default rootReducer;