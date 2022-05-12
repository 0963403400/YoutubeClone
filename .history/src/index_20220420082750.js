import  ReactDOM  from "react-dom";
import React from "react"; 
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
    <Provider store={store}>
       <Router>
          <App />
       </Router>
    </Provider>,
 
    document.getElementById('root')
 )