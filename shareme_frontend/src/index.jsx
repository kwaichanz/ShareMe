import React from 'react';
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>,
)