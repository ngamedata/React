import { createStore, applyMiddleware,combineReducers,compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { reducerPrime } from "./redux/reducer";
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer =combineReducers({
    main:reducerPrime,
})

export const store=createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

