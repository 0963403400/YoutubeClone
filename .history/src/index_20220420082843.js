import  ReactDOM  from "react-dom";
import React from "react"; 
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
       <Router>
          <App />
       </Router>
    </Provider>,
 
    document.getElementById('root')
 )