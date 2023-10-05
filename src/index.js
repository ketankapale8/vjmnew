import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext({isAutheticated : false})

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated ] = useState(false);
  const [loading , setloading ] = useState(false);
  const [user , setUser] = useState({})

  return (
    <Context.Provider value={{isAuthenticated , user , setIsAuthenticated ,
     setUser , loading , 
     setloading}}>
      <App />
    </Context.Provider>
  )

}

root.render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
