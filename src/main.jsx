import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainContextProvider from './Contexts/MainContext.jsx'
import {store} from './app/services/store.ts'
import {Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store ={store}>
    <MainContextProvider>
    <App />
    </MainContextProvider>
    </Provider>
  </React.StrictMode>,
)
