import  ReactDOM  from "react-dom";
import React from "react"; 
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import Store from "./redux/store";
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
    <Provider store={Store}>
       <Router>
          <App />
       </Router>
    </Provider>,
 
    document.getElementById('root')
 )