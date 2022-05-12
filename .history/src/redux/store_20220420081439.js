import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState={
    name:'Sumit',
    age:'21',
}
const reducer=initialState=>initialState
const Store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)
export default Store