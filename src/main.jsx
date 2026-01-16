import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import AuthContext from './Context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
<AuthContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthContext>

)
