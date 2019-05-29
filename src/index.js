import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App";
import createStore from './store'
import {Provider} from "react-redux";


ReactDOM.render(<Provider store={createStore()}><App/></Provider>, document.getElementById('root'));