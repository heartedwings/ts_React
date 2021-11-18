import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; //Providerをimport。storeがどこからでも (子コンポーネントからでも)アクセスできるように設定
import { createStore } from 'redux'; //storeを作るために必要なcreateStoreをimport
import reducer from './reducers' //reducerをcreateStoreの引数にするためimport

const store = createStore(reducer) //createStoreでstoreを作成し、作成したReducerを登録

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
