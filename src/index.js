import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './store';
import { Provider} from 'react-redux'
ReactDOM.render(
   <Fragment>
   <BrowserRouter>
 <Provider store={store}>

 
    <App />
 
    
  </Provider>
  </BrowserRouter>
  </Fragment>
 ,
  document.getElementById('root')
);



