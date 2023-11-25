import { Amplify } from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import amplifyConfig from './aws-exports.js'
import './index.css'

Amplify.configure(amplifyConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
