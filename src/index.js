import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './store.js'
// import store from'./redux/store.js'
import { createContext } from 'react';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if(process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext()

// const AppWrapper = () => {
//   const [isAuthenticated, setIsAuthenticated ] = useState(false);
//   const [loading , setloading ] = useState(false);
//   const [user , setUser] = useState({})
//   // value={{isAuthenticated , user , setIsAuthenticated ,
//   //   setUser , loading , 
//   //   setloading}}

//   return (
//     <Context.Provider value={{isAuthenticated , setIsAuthenticated}}>
//     </Context.Provider>
//   )
  
// }

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />       
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
