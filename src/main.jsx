import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import AuthContext from './Context/AuthContext.jsx';
import { Provider } from "react-redux";
import { store, persistor } from "./App/Store.js";
import { PersistGate } from "redux-persist/integration/react";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
<AuthContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthContext>
    </PersistGate>
    </Provider>

)
