import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import UserReducer from "./redux/reducers/userReducer";

// let myStore = createStore(UserReducer);

ReactDOM.render(
  // <Provider store={myStore}>
    <App />,
  // </Provider>,
  document.getElementById('root')
);

